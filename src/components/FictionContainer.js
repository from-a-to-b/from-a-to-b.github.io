import React, { Component } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';
import Typist from 'react-typist';
// import * as d3 from 'd3';
import _ from 'lodash';

const Fragment = React.Fragment;
const FictionArea = styled.div`
  position:fixed;
  z-index:5;
  left: 20px;
  width: calc(100% - 40px);
  top: 20px;
  transform: translate(-50%, 50);
  mix-blend-mode: multiply;

  div {
    font-size:9.0em;
    color:white;
    line-height: 1;
    color: blue;

  mix-blend-mode: multiply;
    background-color:white;
  }
`;

class FictionContainer extends Component {
  render() {

    if (!_.isNull(this.props.data)){
      let currentSequence = this.props.data.pois[this.props.currentIdx % this.props.data.pois.length];
      let fictionStr = currentSequence.fiction;
      return (
        <FictionArea>

          <Typist>
            {fictionStr}
          </Typist>
        </FictionArea>
      )
    } else {
      return <Fragment></Fragment>
    }


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

export default connect(mapStateToProps)(FictionContainer);