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
            <img src={`${process.env.PUBLIC_URL}/photos/01.jpg`} alt="photo" />
          </PhotoContainer>
          <PhotoContainer>
            <img src={`${process.env.PUBLIC_URL}/photos/02.jpg`} alt="photo" />
          </PhotoContainer>
          <PhotoContainer>
            <img src={`${process.env.PUBLIC_URL}/photos/03.jpg`} alt="photo" />
          </PhotoContainer>
          <PhotoContainer>
            <img src={`${process.env.PUBLIC_URL}/photos/04.jpg`} alt="photo" />
          </PhotoContainer>
        </Carousel>
      </SliderContainer>
    )
  }
}

export default PhotoArea;