import * as TYPES from '../actions/photo/photo.types';

export default function photo(state = {}, action) {
  switch (action.type) {
    case TYPES.REQUEST_PHOTO:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
      });
    case TYPES.REQUEST_PHOTO_SUCCESS:
      return Object.assign({}, state, {
        response: action.response,
      });
    case TYPES.REQUEST_PHOTO_FAIL:
      return Object.assign({}, state, {
        response: action.response,
      });
    default:
      return state;
  }
}
