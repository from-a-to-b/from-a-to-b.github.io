import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IntroArea, VisualArea, Description, PhotoArea, Credits, PdfListArea } from '../components';
import { windowResize, changeData, changeDataStatus, changeSpeculativeTripID, changePdfListIds } from '../actions';
import axios from 'axios';
import styled from 'styled-components';
import { API_URL } from '../constants/defaults';



const Fragment = React.Fragment;
class Home extends Component {
  componentDidMount(){

    window.addEventListener('resize', this.resizeHandler.bind(this));
    this.resizeHandler();
    this.loadData();
  }



  loadData(){
    axios.all([axios.get(`${API_URL}/api/speculative_trips/random.json`), 
               axios.get(`${API_URL}/api/speculative_trips.json`)])
    .then(axios.spread((randomResponse, indexResponse) => {

      if (randomResponse.data.success) {
        this.props.dispatch(changeData(randomResponse.data.result));
        this.props.dispatch(changeSpeculativeTripID(randomResponse.data.id));
        
      } 


      if (indexResponse.data.success) {
        this.props.dispatch(changePdfListIds(indexResponse.data.ids));
        this.props.dispatch(changeDataStatus('loaded'));
      }
      
    }));
    
    
      
  }


  resizeHandler(e){
    this.props.dispatch(windowResize({
      width: window.innerWidth,
      height: window.innerHeight
    }));
    
  }


  render() {


    return (
      <Fragment>
        <IntroArea />
        <VisualArea />
        <PdfListArea />
        <Description />
        <PhotoArea />
        <Credits />
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