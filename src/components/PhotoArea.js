import React, { Component } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';
import Carousel from 'nuka-carousel';

const PhotoContainer = styled.div`
  img {
    width: 100%;
  }
`;
const SliderContainer = styled.div`
  margin: 20px 0;
`;
class PhotoArea extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <SliderContainer>
        <Carousel>
          <PhotoContainer>
            <img src={`${process.env.PUBLIC_URL}/photos/01.jpg`} alt="Installation view of From Point A to Point B" />
          </PhotoContainer>
          <PhotoContainer>
            <img src={`${process.env.PUBLIC_URL}/photos/02.jpg`} alt="Installation view of From Point A to Point B" />
          </PhotoContainer>
          <PhotoContainer>
            <img src={`${process.env.PUBLIC_URL}/photos/03.jpg`} alt="Installation view of From Point A to Point B. Print-outs of generated fictions displayed on a table" />
          </PhotoContainer>
          <PhotoContainer>
            <img src={`${process.env.PUBLIC_URL}/photos/04.jpg`} alt="Installation view of From Point A to Point B" />
          </PhotoContainer>
          <PhotoContainer>
            <img src={`${process.env.PUBLIC_URL}/photos/05.jpg`} alt="Installation view of From Point A to Point B" />
          </PhotoContainer>
        </Carousel>
      </SliderContainer>
    )
  }
}

export default PhotoArea;