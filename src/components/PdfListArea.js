import React, { Component } from 'react'
import styled from 'styled-components';
import { ThumbPDF } from './';
import { connect } from 'react-redux';
import { FullContainer } from '../stylesheets/components';
import _ from 'lodash';
import { Fragment } from './Description';

const Container = styled.div`
  display: flex;
  padding: 0 20px;
  margin-bottom: 10px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Title = styled.div`
  padding: 20px;
  margin-top: 50px;
  font-size: 1.2em;
`;

class PdfListArea extends Component {
  render() {
    let { pdfListIds, windowWidth } = this.props;

    // let pdfListIds2 = windowWidth > 700 ? pdfListIds : pdfListIds.splice(0, 5);

    return (
      <Fragment>
        <Title>
          Fictions
        </Title>
        <Container>
          
          { 
            _.map(pdfListIds, id => { 

              return(
                <ThumbPDF id={id} key={id} />
              )

            })
          }
        </Container>
      </Fragment>
    )
  }
}

let mapStateToProps = state => {
  return {
    windowWidth: state.windowWidth,
    windowHeight: state.windowHeight,
    pdfListIds: state.pdfListIds
  }
}

export default connect(mapStateToProps)(PdfListArea);
