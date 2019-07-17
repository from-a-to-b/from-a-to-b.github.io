import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import axios from 'axios';
import { changeData, changeSpeculativeTripID, changeDataStatus } from '../actions';
import { FullContainer } from '../stylesheets/components';
import { MapContainer, InfoPanel, LoadingPanel, PdfArea } from '../components';
import { API_URL } from '../constants/defaults';
import media from '../stylesheets/media';

const Fragment = React.Fragment;
const ColorBack = styled.div`
  mix-blend-mode: screen;
  position:absolute;
  z-index:11;
  left: 0;
  top: 0;
  width: 50%;

  ${media.babybear`
    width: 100%;
  `}

`;

const BlackBox = styled.div`
  position:absolute;
  z-index: 10;
  background-color: black;
  left:0;
  top:0;
  width:50%;

`;

const Container = styled.div`
  position: relative;
  display: flex;

  ${media.babybear`
    margin-bottom: 20px;
    width: 100%;
    display:block;
  `}

`;

class VisualArea extends Component {
  handleClick(e){
    this.loadData();
  }



  loadData(){

    this.props.dispatch(changeDataStatus('loading'));
    axios.get(`${API_URL}/api/speculative_trips/random.json`)
      .then((response) =>{
        // debugger;
        this.props.dispatch(changeData(response.data.result));
        this.props.dispatch(changeSpeculativeTripID(response.data.id));
        this.props.dispatch(changeDataStatus('loaded'));
      })
      .catch((error) => {
        // handle error
        // this.loadData();
        console.log(error);
      })
      
  }


  render() {
    let { dataStatus, windowHeight } = this.props;
    // let seqKey;
    let backgroundColor, blendMode;

    let height = this.props.windowWidth > 700 ? (645 * this.props.windowWidth * 0.5 / 499) : this.props.windowHeight;

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
        <FullContainer>
          <a href="javascript:void(0);" onClick={this.handleClick.bind(this)}>
            <img src={`${process.env.PUBLIC_URL}/assets/shuffle.svg`} alt="shuffle"></img>
          </a>
        </FullContainer>
        

        <Container>
          
          {
            dataStatus === "loaded" ? 
            <InfoPanel /> :
            <LoadingPanel />
          }
          <ColorBack style={{ 
            height: height,
            backgroundColor: backgroundColor,
            opacity: dataStatus === 'loaded' ? 1 : 0.8,
            mixBlendMode: blendMode
          }}/>
          <MapContainer />
          <PdfArea />
        </Container>
      </Fragment>
    )
  }
}

let mapStateToProps = state => {
  return {
    windowWidth: state.windowWidth,
    windowHeight: state.windowHeight,
    currentIdx: state.currentIdx,
    data: state.data,
    dataStatus: state.dataStatus
  }
}

export default connect(mapStateToProps)(VisualArea);