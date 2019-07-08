import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ThreedContainer, MapContainer, InfoPanel, LoadingPanel } from '../components';
import { windowResize, changeData, changeDataStatus } from '../actions';
import axios from 'axios';
import styled from 'styled-components';

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
    this.resizeHandler();
    this.loadData();
  }



  loadData(){
    axios.get('https://from-a-to-b-api.herokuapp.com/api/speculative_trips/random.json')
      .then((response) =>{
        // debugger;
        this.props.dispatch(changeData(response.data.result));
        this.props.dispatch(changeDataStatus('loaded'));
      })
      .catch((error) => {
        // handle error
        // this.loadData();
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