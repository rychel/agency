import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import LoginReducer from './reducers';
const RootReducers = combineReducers({
  LoginReducer,
});

export const store = createStore(RootReducers, applyMiddleware(thunk));
