import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import {
  productDetailsReducer,
  productListReducer,
} from './reducers/productListReducer';
import thunk from 'redux-thunk';

const initialState = {};

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk)),
);

export default store;
