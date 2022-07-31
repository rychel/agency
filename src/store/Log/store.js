import {createStore, combineReducers} from 'redux';
import LoginReducer from './reducers';
const RootReducers = combineReducers({
  LoginReducer,
});

export const store = createStore(RootReducers);
