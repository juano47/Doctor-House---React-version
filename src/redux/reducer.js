import { combineReducers } from 'redux';
import favoritesReducer from './favoritesReducer';

const rootReducer = combineReducers({
  favorites: favoritesReducer,
});

export default rootReducer;