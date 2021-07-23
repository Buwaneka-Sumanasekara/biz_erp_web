import { combineReducers } from 'redux';


import app from './app/reducer';
import user from './user/reducer';


// Combine all
const appReducer = combineReducers({
  app,user
});

// Setup root reducer
const rootReducer = (state, action) => {
  const newState = (action.type === 'RESET') ? {app:state.app} : state;

  return appReducer(newState, action);
};

export default rootReducer;