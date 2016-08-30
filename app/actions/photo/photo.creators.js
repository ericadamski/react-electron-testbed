import Request from '../../api/request';
import * as TYPES from './photo.types';
import { dispatch } from 'redux';

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

export function doRequest() {
  return (dispatch) => {
    const r = new Request('get-photo');

    dispatch(requestPhoto);

    r.send().subscribe(resp => {
      const response = resp.json();
      (response.err) ?
        dispatch(requestPhotoFail(resp)) :
        dispatch(requestPhotoSuccess(resp));
    });
  };
}
