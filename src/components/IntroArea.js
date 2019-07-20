import React, { Component } from 'react'
import styled from 'styled-components';
import { FullContainer, Column } from '../stylesheets/components';
import media from '../stylesheets/media';

const TextWrappper = styled.div`
  width: 300px;

  h1, p {
    font-size: 1.3em;
  }
`;

const IntroColumn = styled.div`
  width: 50%;

  h1, p {
    font-size: 1.3em;
  }

  ${media.babybear`
    margin-bottom: 20px;
    width: 100%;
  `}
`;

class IntroArea extends Component {
  render() {
    return (
      <FullContainer>
        <IntroColumn>
          <h1>
            From Point A to Point B
          </h1>
          <p>
            Achim Koh and Wonyoung So
          </p>
        </IntroColumn>
        <IntroColumn>
          <TextWrappper>
            <p>
              <cite>From Point A to Point B</cite> generates fictional accounts of real trips taken by real people that exist in public data sets. 
            </p>
          </TextWrappper>
        </IntroColumn>
      </FullContainer>
    )
  }
}

export default IntroArea;