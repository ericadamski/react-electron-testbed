import * as TYPES from '../actions/loading-screen/loading-screen.types';

export default function loadingScreen(state = { is_shown: true }, action) {
  switch (action.type) {
    case TYPES.SHOW_LOADING_SCREEN:
      console.log(action);
      return Object.assign({}, state, {
        is_shown: action['is_shown']
      });
    case TYPES.HIDE_LOADING_SCREEN:
      return Object.assign({}, state, {
        is_shown: action['is_shown']
      });
    default:
      return state;
  };
}
