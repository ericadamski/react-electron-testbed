import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Home from '../components/home/home.component';
import { doRequest } from '../actions/photo/photo.creators';
import {
  showLoadingScreen,
  hideLoadingScreen
} from '../actions/loading-screen/loading-screen.creators';

class HomePage extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(doRequest(() => dispatch(hideLoadingScreen())));
    dispatch(showLoadingScreen());
  }

  render() {
    const { photo, loadingScreen } = this.props;
    return (
      <Home response={photo.response}
        showLoadingScreen={loadingScreen.is_shown} />
    );
  }
}

HomePage.propTypes = {
  loadingScreen: PropTypes.object.isRequired,
  photo: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(HomePage);
