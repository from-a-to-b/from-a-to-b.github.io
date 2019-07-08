import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IntroArea, VisualArea, Description, PhotoArea, Credits } from '../components';
import { windowResize, changeData, changeDataStatus, changeSpeculativeTripID } from '../actions';
import axios from 'axios';
import styled from 'styled-components';



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
        this.props.dispatch(changeSpeculativeTripID(response.data.id));
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


    return (
      <Fragment>
        <IntroArea />
        <VisualArea />
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