import * as TYPES from './loading-screen.types';
import { dispatch } from 'redux';

export function loadingScreen(shown) {
  return {
    type: (shown) ? TYPES.SHOW_LOADING_SCREEN : TYPES.HIDE_LOADING_SCREEN,
    is_shown: shown
  };
}

export function showLoadingScreen() {
  return (dispatch) => dispatch(loadingScreen(true));
}

export function hideLoadingScreen() {
  return (dispatch) => dispatch(loadingScreen(false));
}

export function toggleLoadingScreen(state) {
  return (dispatch) => dispatch(loadingScreen(!state['is_shown']));
}
