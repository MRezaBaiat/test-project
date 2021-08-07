import { combineReducers, configureStore } from '@reduxjs/toolkit';
import reducer from '../redux/reducers/reducer';

const rootReducer = combineReducers({
  global: reducer
});

const store = configureStore({
  reducer: rootReducer,
  enhancers: []
});
export default store;
