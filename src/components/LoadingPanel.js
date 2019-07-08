import React, { Component } from 'react';
import styled from 'styled-components';
import { heightPercentage } from '../constants/defaults';

const Container = styled.div`
  position:fixed;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: calc(${heightPercentage * 100}% + 10px);
  z-index: 9;
  line-height: 1.9;
`;

const DescSection = styled.div`
  display: block;
  width: 600px;
  padding: 2px 4px;
  background-color: black;
  color: white;
  font-size:1.2em;
`;

const Gutter = styled.div`
  height: 5px;
`;


class LoadingPanel extends Component {
  constructor(props){
    super(props);
    this.state = {
      nDots: 1
    }
  }

  convertNtoDots(nDots){
    var str = "";

    for (let i = 0; i < nDots; i++) {
      str += ".";
    }

    return str;
  }

  componentDidMount(){
    
    this.intervalId = setInterval(() => {
      let nDots = this.state.nDots + 1;

      this.setState({
        nDots: nDots % 4
      })
    }, 300);

  }

  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

  render() {

    let { dataStatus } = this.props;
    let dotsStr = this.convertNtoDots(this.state.nDots);

    if (dataStatus === 'loaded') {
      clearInterval(this.intervalId);
    }


    return (
      <Container>
        <DescSection>
          Loading a trip and generating a fiction{dotsStr}
        </DescSection>
        <Gutter />
        <div className="linear-activity">
          <div className="indeterminate"></div>
        </div> 
      </Container>
    );
  }
}

export default LoadingPanel;