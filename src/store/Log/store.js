import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import LoginReducer from './reducers';
import DirReducers from './Dir/DirReducers';
const RootReducers = combineReducers({
  LoginReducer,
  DirReducers,
});

export const store = createStore(RootReducers, applyMiddleware(thunk));
