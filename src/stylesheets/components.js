import styled from 'styled-components';
import mixins from './mixins';
import media from './media';

const FullContainer = styled.section`
  padding: 20px;
  width: calc(100% - 40px);
  display: flex;
  justify-content: space-between;

  ${media.babybear`
    display:block;
    width: calc(100% - 20px);
  `}

`;

const Column = styled.div`
  width: calc(50% - 25px);
  ul {
    max-width: 600px;
    list-style: circle;
  }
  li {
    font-size:1.1em;
    margin-bottom: 15px;
  }
  p { 
    font-size:1.2em;
    margin-bottom: 15px;
    max-width: 600px;
  }

  a {
    text-decoration: underline;
    text-decoration-color: #777;
  }

  ${media.babybear`
    margin-bottom: 20px;
    width: 100%;
  `}
`;

const Container = styled.section`

  padding: 20px;
  width: calc(1000px - 40px);
  
  display: flex;
  justify-content: space-between;
`;

const Subtitle = styled.h2`
  ${mixins.DRUK_TEXT_TYPE}
  font-size:2.0em;
  text-align: center;
  margin: 20px 0;
`;

const AppleBox = styled.div`
  height: 200px;
`

export {
  AppleBox,
  FullContainer,
  Container,
  Subtitle,
  Column,
};