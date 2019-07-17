import React, { Component } from 'react';
import { connect } from 'react-redux';
import { heightPercentage } from '../constants/defaults';
import styled from 'styled-components';
import * as turf from 'turf';
import _ from 'lodash';
import media from '../stylesheets/media';

const MapDiv = styled.div`
  width: 50%;

  ${media.babybear`
    width: 100%;
  `}

`;

class MapContainer extends Component {
  constructor(props){
    super(props);

    this.currentSequence = [-75.343, 39.984];
  }
  componentDidMount() {

    this.map = new window.mapboxgl.Map({
      container: this.refsMapContainer,
      style: 'mapbox://styles/senseable/cjrb60fbp32ft2sqlsska4fmj',
      zoom: 14,
      // minZoom: 4,
      center: [-73.988, 40.731],
      interactive: false
    });


    window.map = this.map;
    this.map.on('style.load', this.handleStyleLoad.bind(this));
  }



  handleRender(e) {
  }

  handleStyleLoad(e) {

    this.map.addSource('trip-path', {
      "type": "geojson",
      "data": turf.lineString([[-21.96, 64.14], [-21.95, 64.14]])
    });

    this.map.addSource('trip-point', {
      "type": "geojson",
      "data": turf.point([-75.343, 39.984])
    });

   this.map.addSource('trip-pois-point', {
      "type": "geojson",
      "data": turf.point([-75.343, 39.984])
    });

    this.map.addLayer({
      'id': 'trip-path-layer',
      'type': 'line',
      'source': "trip-path",
      'paint': {
        'line-color': '#FFFFFF',
        'line-width': 5,
        'line-opacity': 1
      }
    });


     this.map.addLayer({
      'id': 'trip-pois-point-layer',
      'type': 'circle',
      'source': "trip-pois-point",
      'paint': {
        // make circles larger as the user zooms from z12 to z22
        'circle-radius': {
          'base': 3,
          'stops': [[12, 3], [22, 80]]
        },
        'circle-color': "#000000",
        'circle-stroke-width': 2,
        'circle-stroke-color': '#FFFFFF'
      }
    });


    this.map.addLayer({
      'id': 'trip-point-layer',
      'type': 'circle',
      'source': "trip-point",
      'paint': {
        // make circles larger as the user zooms from z12 to z22
        'circle-radius': {
          'base': 6,
          'stops': [[12, 6], [22, 180]]
        },
        'circle-color': "#FF0000",
        'circle-stroke-width': 2,
        'circle-stroke-color': '#FFFFFF'
      }
    });


  }


  componentDidUpdate(prevProps) {
    this.map.resize();

    if (!_.isNull(this.props.data)) {

      let { data } = this.props;
      
      if ((_.isNull(prevProps.data) && !_.isNull(data)) || data.id !== prevProps.data.id) {
        
        let bbox = turf.bbox(data.trip);

        this.map.getSource('trip-path').setData(data.trip);
        this.map.fitBounds([
          [bbox[0], bbox[1]], 
          [bbox[2], bbox[3]]
        ], {
          padding: { top: 20, bottom: 20, left: 0, right: 0 }
        });

        



        this.map.getSource('trip-pois-point').setData(turf.featureCollection(_.map(data.pois, poi => turf.point(poi.location))));
        // let result = turf.featureCollection(_.map(data.pois, poi => turf.point(poi.location)));
        // console.log(result);
        // debugger;

        // this.animate();
      }

      if (prevProps.currentIdx !== this.props.currentIdx || this.props.currentIdx === 0) {

        if (this.props.currentIdx === 0){
          this.currentSequence = [this.props.data.pois[this.props.currentIdx % this.props.data.pois.length].projected_point_on_path[0], this.props.data.pois[this.props.currentIdx % this.props.data.pois.length].projected_point_on_path[1]]
        }
        
        this.targetSequence = this.props.data.pois[this.props.currentIdx % this.props.data.pois.length];
      }
    }

  }

  animate(){
    if (!_.isUndefined(this.targetSequence)){
      let target_x = this.targetSequence.projected_point_on_path[0];
      let target_y = this.targetSequence.projected_point_on_path[1];

      this.currentSequence[0] += (target_x - this.currentSequence[0]) * 0.2;
      this.currentSequence[1] += (target_y - this.currentSequence[1]) * 0.2;
      
      this.map.getSource('trip-point').setData(turf.point(this.currentSequence));
    }
    requestAnimationFrame(this.animate.bind(this));
  }


  render() {
    let height = this.props.windowWidth > 700 ? (645 * this.props.windowWidth * 0.5 / 499) : this.props.windowHeight;
    
    return (
      <MapDiv ref={c => { this.refsMapContainer = c; }} style={{ height: height }} className="map-container">
      </MapDiv>
    );
  }
}

let mapStateToProps = state => {
  return {
    windowWidth: state.windowWidth,
    windowHeight: state.windowHeight,
    data: state.data,
    currentIdx: state.currentIdx
  }
}

export default connect(mapStateToProps)(MapContainer);