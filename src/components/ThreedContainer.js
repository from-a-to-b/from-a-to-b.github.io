/*global google*/
import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as THREE from 'three';
import styled from 'styled-components';
import { GSVPano } from './';
import _ from 'lodash';
import { changeCurrentIdx } from '../actions';
import { heightPercentage } from '../constants/defaults';
import { changeData } from '../actions';
import axios from 'axios';
const { ipcRenderer } = window.require('electron');

const FullContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: ${ heightPercentage * 100}%;
`;



class ThreedContainer extends Component {
  constructor(props){
    super(props);

    this.camera = null;
    this.scene = null;
    this.renderer = null;
    this.containerRef = React.createRef();
    this.lon = 0;
    this.phi = 0; 
    this.theta = 0;
    this.lat = 15;

    this.animate = this.animate.bind(this);

  }



  componentDidMount(){
    let {windowWidth, windowHeight} = this.props;

    this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / (window.innerHeight * heightPercentage), 1, 10000);
    this.camera.position.set(Math.random() * 100 - 200,
      Math.random() * 100 - 200, Math.random() * 100 - 200);
    this.camera.target = new THREE.Vector3(0, 0, 0);

    this.scene = new THREE.Scene();

    var texture = new THREE.TextureLoader().load('/assets/placeholder.jpg');

    // this.mesh = new THREE.Mesh(new THREE.SphereGeometry(500, 60, 40), new THREE.MeshBasicMaterial({ color: 0xFF0000, map: texture }));
    // this.mesh.scale.set(10, 10, 10);
    // this.scene.add(this.mesh);		

    this.geometry = new THREE.SphereGeometry(500, 60, 40);
    this.material = new THREE.MeshBasicMaterial({ map: texture, color: 0xffffff, side: THREE.BackSide});
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.mesh);

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(windowWidth, windowHeight * heightPercentage);
    this.renderer.setClearColor(0x000000, 0);
    
    this.containerRef.current.appendChild(this.renderer.domElement);

    this.animate();
    this.initPanorama();
  }

  initPanorama(){
    this.loader = new GSVPano.PanoLoader({
      useWebGL: false,
      zoom: 3
    });
    
    this.loader.onSizeChange = function () {

    };

    this.loader.onProgress = function (p) {
      // setProgress(p);
    };

    var _this = this;
    this.loader.onError = function (e) {
      // showError(message);
      // showProgress(false);
      console.log(e.type);
      var timer = setTimeout(() => {
        console.log("next dispatched", Number(_this.props.currentIdx) + 1);
        this.props.dispatch(changeCurrentIdx(Number(_this.props.currentIdx) + 1));
        clearTimeout(timer);
      }, 500);

    };

    this.loader.onPanoramaLoad = (e) => {

      // window.location.hash = location.lat() + ',' + location.lng();

      var source = e.canvas[0];
      this.mesh.material.map = new THREE.Texture(source);
      this.mesh.material.map.needsUpdate = true;

      var canvas = document.createElement('canvas');
      var s = 2;
      canvas.width = source.width / s;
      canvas.height = source.height / s;
      var ctx = canvas.getContext('2d');
      ctx.drawImage(source, 0, 0, source.width, source.height, 0, 0, canvas.width, canvas.height);

      var timer = setTimeout(() => {
        console.log("next dispatched", Number(this.props.currentIdx) + 1);
        this.props.dispatch(changeCurrentIdx(Number(this.props.currentIdx) + 1));
        clearTimeout(timer);
      }, 500);

      console.log("load complete");

    };
  }

  componentDidUpdate(prevProps) {
    let { windowWidth, windowHeight } = this.props;
    this.renderer.setSize(windowWidth, (windowHeight * heightPercentage));

    this.camera.aspect = windowWidth / (windowHeight * heightPercentage);
    this.camera.updateProjectionMatrix();


    if (!_.isNull(this.props.data)) {

      if (prevProps.currentIdx !== this.props.currentIdx || this.props.currentIdx === 0) {

        let currentSequence = this.props.data.pois[this.props.currentIdx % this.props.data.pois.length];
        let location = new google.maps.LatLng(currentSequence.projected_point_on_path[1], currentSequence.projected_point_on_path[0]);
        
        try {
          this.loader.load(location);
        } catch(e) {
          this.loadData();
        }
        

      }
    }

  }

  loadData(){
    axios.get('http://localhost:8080/api/trips/random.json')
      .then((response) =>{
        // debugger;


        this.props.dispatch(changeData(response.data));
        ipcRenderer.send('pdf-url', {url: response.data.pdf_url});

      })
      .catch((error) => {
        // handle error
        this.loadData();
        console.log(error);
      })
      
  }




  animate() {
    requestAnimationFrame(this.animate);
    this.renderThree();

  }

  renderThree() {
    this.renderer.render(this.scene, this.camera);

    this.lon += .25;
    // this.lat += Math.sin(this.lon * 25) * 0.2;
    // this.theta += .52;

    this.camera.lookAt(this.camera.target);
    this.lat = Math.max(- 85, Math.min(85, this.lat));
    this.phi = (90 - this.lat) * Math.PI / 180;
    this.theta = this.lon * Math.PI / 180;
    // console.log(this.phi, this.lat, this.lon, this.theta);

    this.camera.position.x = 100 * Math.sin(this.phi) * Math.cos(this.theta);
    this.camera.position.y = 100 * Math.cos(this.phi);
    this.camera.position.z = 100 * Math.sin(this.phi) * Math.sin(this.theta);

  }


  render() {
    return (
      <FullContainer ref={this.containerRef}>
      </FullContainer>
    )
  }
}

let mapStateToProps = state => {
  return {
    windowWidth: state.windowWidth,
    windowHeight: state.windowHeight,
    data: state.data,
    currentIdx: state.currentIdx
  };
}
export default connect(mapStateToProps)(ThreedContainer);