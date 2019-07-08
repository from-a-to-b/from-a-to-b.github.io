import React, { Component } from 'react'
import { connect } from 'react-redux';
import _ from 'lodash';
import styled from 'styled-components';
import moment from 'moment';
import { heightPercentage } from '../constants/defaults';

const Fragment = React.Fragment;
const Container = styled.div`
  position:fixed;
  left: 10px;
  bottom: calc(${heightPercentage * 100}% + 10px);
  z-index: 9;
  line-height: 1.9;
`;

const DescSection = styled.div`
  display: inline-block;
  padding: 2px 4px;
  background-color: black;
  color: white;
  font-size:1.2em;
`;


class InfoPanel extends Component {
  render() {
    if (!_.isNull(this.props.data)) {
      let { data } = this.props;
      let title = `A ${Math.floor(data.total_time / 60)}-minute ${data.type} trip`;
      let firstCoordinate = _.first(_.first(data.trip.features).geometry.coordinates);
      let lastCoordinate = _.last(_.first(data.trip.features).geometry.coordinates);
      let fromTo = `From ${firstCoordinate.join(', ')} to ${lastCoordinate.join(', ')}`
      let dateFormat = `From ${moment.unix(data.pickup_time).format("MMMM Qo, YYYY h:mm a")} to ${moment.unix(data.dropoff_time).format("h:mm a")}`;

      return (
        <Container>
          <DescSection>
            { title }
          </DescSection>
          &nbsp;
          <DescSection>
            { fromTo }
          </DescSection>
          <br/>
          <DescSection>
            { dateFormat }
          </DescSection>


        </Container>
      )
    } else {
      return (
        <Fragment></Fragment>
      );
    }
  }
}

let mapStateToProps = state => {
  return {
    windowWidth: state.windowWidth,
    windowHeight: state.windowHeight,
    data: state.data
  }
}
export default connect(mapStateToProps)(InfoPanel);