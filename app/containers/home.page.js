import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Home from '../components/home/home.component';
import { doRequest } from '../actions/photo/photo.creators';

class HomePage extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(doRequest());
  }

  render() {
    const { photo, dispatch } = this.props;
    return (
      <Home image={photo} updateImage={() => dispatch(doRequest())} />
    );
  }
}

HomePage.propTypes = {
  photo: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(HomePage);
