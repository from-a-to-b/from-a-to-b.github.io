import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ThreedContainer, MapContainer, InfoPanel, LoadingPanel } from '../components';
import { windowResize, changeData, changeDataStatus } from '../actions';
import axios from 'axios';
import styled from 'styled-components';

const { ipcRenderer } = window.require('electron');

const ColorBack = styled.div`
  mix-blend-mode: screen;
  position:fixed;
  z-index:8;
  left: 0;
  top: 0;
  width: 100%;
  height:100%;
`;

const BlackBox = styled.div`
  position:fixed;
  z-index: 10;
  background-color: black;
  right:0;
  top:0;
  height:100%;
`;

const Fragment = React.Fragment;
class Home extends Component {
  componentDidMount(){

    window.addEventListener('resize', this.resizeHandler.bind(this));
    document.body.addEventListener('keyup', this.handleKeyup.bind(this));
    document.body.addEventListener('click', this.handleBodyClick.bind(this), true); 
    ipcRenderer.on('print_completed', this.handlePrintComplete.bind(this));
    setTimeout(() => {
      window.location.reload();
    }, 3600000 / 2); 

    this.resizeHandler();
    this.loadDataNotPrint();
  }

  handlePrintComplete(e){
    console.log("ipcRenderer print complete");
    this.props.dispatch(changeDataStatus('loaded'));
  }

  handleBodyClick(e){
    if (this.props.dataStatus !== 'loading') {
      this.props.dispatch(changeDataStatus('loading'));
      ipcRenderer.send('loading');
      this.loadData();
    }
  }

  handleKeyup(e){
    if (e.keyCode === 32 && this.props.dataStatus !== 'loading') {
      this.props.dispatch(changeDataStatus('loading'));
      ipcRenderer.send('loading');
      this.loadData();
    }
  }

  loadDataNotPrint(){
    axios.get('http://localhost:8080/api/trips/random.json')
      .then((response) =>{
        // debugger;
        this.props.dispatch(changeData(response.data));
        this.props.dispatch(changeDataStatus('loaded'));
      })
      .catch((error) => {
        // handle error
        this.loadDataNotPrint();
        console.log(error);
      })
  }

  loadData(){
    axios.get('http://localhost:8080/api/trips/random.json')
      .then((response) =>{
        // debugger;
        this.props.dispatch(changeData(response.data));
        this.props.dispatch(changeDataStatus('loaded'));
        ipcRenderer.send('pdf-url', {url: response.data.pdf_url});
      })
      .catch((error) => {
        // handle error
        this.loadData();
        console.log(error);
      })
      
  }


  resizeHandler(e){
    this.props.dispatch(windowResize({
      width: window.innerWidth,
      height: window.innerHeight
    }));
    
  }


  render() {
    let { dataStatus } = this.props;
    // let seqKey;
    let backgroundColor, blendMode;

    // if (!_.isNull(this.props.data)) {
    //   seqKey = this.props.currentIdx % this.props.data.pois.length;
    // } else {
    //   seqKey = 0;
    // }
    

    if (dataStatus === 'loaded') {
      backgroundColor = this.props.data.type === 'taxi' ? "#BEB514" : "#0511ED";
      blendMode = this.props.data.type === 'taxi' ? "color" : "screen";
    } else {
      backgroundColor = "#000000";
      blendMode = "normal";
    }


    return (
      <Fragment>
        <BlackBox style={{width: 100}} />
        {
          dataStatus === "loaded" ? 
          <InfoPanel /> :
          <LoadingPanel />
        }
        <ColorBack style={{ 
          backgroundColor: backgroundColor,
          opacity: dataStatus === 'loaded' ? 1 : 0.8,
          mixBlendMode: blendMode
        }}/>
        <ThreedContainer />
        <MapContainer />
      </Fragment>
    );
  }
}

let mapStateToProps = state => {
  return {
    currentIdx: state.currentIdx,
    data: state.data,
    dataStatus: state.dataStatus
  }
}

export default connect(mapStateToProps)(Home);