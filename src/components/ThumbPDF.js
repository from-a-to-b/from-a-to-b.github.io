import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Document, Page, pdfjs } from "react-pdf";
import { API_URL } from '../constants/defaults';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Container = styled.a`
  display: block;
  &:hover {
    opacity: 0.9;
  }
`;

const Wrap = styled.div`

  width: calc(25% - 40px);
  margin-bottom: 40px;
  position: relative;
`;
const ButtonsArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    color: white;
  }
`;

class ThumbPDF extends Component {
  constructor(props){
    super(props);
    this.state = {
      page: 0,
      numPages: 1
    }
  }


  onDocumentLoadSuccess({ numPages }){
    this.setState({ 
      numPages: numPages
    });
    
    // setInterval(() => {
    //   this.setState((previousState) => ({
    //     page: ((previousState.page + 1) % previousState.numPages)
    //   }));

    // }, 5000);
  }

  handlePrevClick(e){
    this.setState({
      page: (this.state.page - 1) < 0 ? (this.state.numPages - 1) : ((this.state.page - 1) % this.state.numPages)
    });
  }

  handleNextClick(e){
    this.setState({
      page: ((this.state.page + 1) % this.state.numPages)
    });
  }

  render() {
    let { id, windowWidth } = this.props;

    return (
      <Wrap>
  
        <Container href={`${API_URL}/api/speculative_trips/${id}.pdf`} target="_blank">
          <Document
            file={`${API_URL}/api/speculative_trips/${id}.pdf`}
            onLoadSuccess={this.onDocumentLoadSuccess.bind(this)}
          >
              <Page width={(windowWidth - 40) * 0.25 - 40} pageNumber={this.state.page + 1} />
          </Document>
          
        </Container>

        <ButtonsArea>
          <a href="javascript:void(0);" onClick={this.handlePrevClick.bind(this)}>←</a>&nbsp;&nbsp;
          <a href="javascript:void(0);" onClick={this.handleNextClick.bind(this)}>→</a>
        </ButtonsArea>
      </Wrap>
    )
  }
}

let mapStateToProps = state => {
  return {
    windowWidth: state.windowWidth,
    windowHeight: state.windowHeight
  }
}

export default connect(mapStateToProps)(ThumbPDF);