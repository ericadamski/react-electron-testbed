import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Home from '../components/home/home.component';
import { requestPhoto } from '../actions/photo/photo.creators';

class HomePage extends Component {
  render() {
    const { dispatch } = this.props;
    dispatch(requestPhoto());
    const { isFetching, response } = this.props;
    return (
      <Home response={response} fetching={isFetching} />
    );
  }
}

HomePage.propTypes = {
  isFetching: PropTypes.bool,
  response: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

export default connect(state => state)(Home);
