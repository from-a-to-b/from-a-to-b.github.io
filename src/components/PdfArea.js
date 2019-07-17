import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Document, Page, pdfjs } from "react-pdf";
import { API_URL } from '../constants/defaults';
import media from '../stylesheets/media';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Container = styled.div`
  width: 50%;

  ${media.babybear`
    width: 100%;
    overflow:hidden;
  `}
`;

class PdfArea extends Component {
  constructor(props){
    super(props);
    this.state = {
      page: 0,
      numPages: 1
    }
    this.intervalID = null;
  }

  componentWillUnmount(){
    clearInterval(this.intervalID);
  }

  onDocumentLoadSuccess({ numPages }){
    this.setState({ 
      numPages: numPages
    });
    
    setInterval(() => {
      this.setState((previousState) => ({
        page: ((previousState.page + 1) % previousState.numPages)
      }));

    }, 5000);
  }

  render() {
    let { speculativeTripID, windowWidth } = this.props;
    // console.log(this.state.page + 1);
    let width = windowWidth > 700 ? windowWidth * 0.5 : windowWidth ;

    return (
      <Container>
        { 
          _.isNull(speculativeTripID) ? 
          null :
          <Document
            file={`${API_URL}/api/speculative_trips/${speculativeTripID}.pdf`}
            onLoadSuccess={this.onDocumentLoadSuccess.bind(this)}
          >
             <Page width={width} pageNumber={this.state.page + 1} />
          </Document>
          
        } 
      </Container>
    )
  }
}

let mapStateToProps = state => {
  return {
    windowWidth: state.windowWidth,
    windowHeight: state.windowHeight,
    speculativeTripID: state.speculativeTripID
  }
}

export default connect(mapStateToProps)(PdfArea);