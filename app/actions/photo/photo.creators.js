import Request from '../../api/request';
import * as TYPES from './photo.types';
import { dispatch } from 'redux';
import { hideLoadingScreen } from '../loading-screen/loading-screen.creators';

var _request;

export function requestPhoto() {
  return {
    type: TYPES.REQUEST_PHOTO,
    isFetching: true
  };
}

export function requestPhotoSuccess(resp) {
  return {
    type: TYPES.REQUEST_PHOTO_SUCCESS,
    response: resp
  };
}

export function requestPhotoFail(resp) {
  return {
    type: TYPES.REQUEST_PHOTO_FAIL,
    response: resp
  };
}

export function doRequest(callback = () => console.log('not implemented')) {
  return (dispatch) => {
    if (!_request) _request = new Request('get-photo');
    dispatch(requestPhoto());
    _request.send().subscribe(resp => {
      (resp.error) ?
        dispatch(requestPhotoFail(resp)) :
        dispatch(requestPhotoSuccess(resp));
      callback();
    });
  };
}
