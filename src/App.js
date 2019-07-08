import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import Home from './pages/Home';

const Fragment = React.Fragment;

class App extends Component {

  render() {

    return (
      <HashRouter>
        <Fragment>
          <Route exact path="/" component={Home} />
        </Fragment>
      </HashRouter>
    );
  }
}

let mapStateToProps = state => {
  return {
    width: state.windowWidth,
    height: state.windowHeight
  }
};

export default connect(mapStateToProps)(App);