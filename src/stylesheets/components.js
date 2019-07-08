import styled from 'styled-components';
import mixins from './mixins';

const SectionContainer = styled.section`
  width: 1000px;
  margin: 100px auto 200px;
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
  SectionContainer,
  Subtitle
};