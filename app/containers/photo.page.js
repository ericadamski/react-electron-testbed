import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Photo from '../components/photo';
import * as PhotoActions from '../actions/photo';
import Request from '../api';

let response;

function doFetch() {
  const r = new Request('get-image');
  response = r.send();
}


function mapStateToProps(state) {
  return {
    click: doFetch,
    photo: state.response
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PhotoActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Photo);
