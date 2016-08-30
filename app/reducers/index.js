import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { photo } from './photo.reducer';

const rootReducer = combineReducers({
  ...photo,
  routing
});

export default rootReducer;
