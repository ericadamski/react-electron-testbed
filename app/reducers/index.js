import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import photo from './photo.reducer';
import loadingScreen from './loading-screen.reducer';

const rootReducer = combineReducers({
  loadingScreen,
  photo,
  routing
});

export default rootReducer;
