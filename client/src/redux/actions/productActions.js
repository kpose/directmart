import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from '../constants/productConstants';

const listProducts = () => async (dispatch) => {
  try {
    dispatch({type: PRODUCT_LIST_REQUEST});
    let response = await fetch('http://127.0.0.1:5000/api/products');
    let data = await response.json();
    dispatch({type: PRODUCT_LIST_SUCCESS, payload: data});
  } catch (error) {
    dispatch({type: PRODUCT_LIST_FAIL, payload: error.message});
  }
};

const detailsProduct = (productId) => (dispatch) => {
  try {
    dispatch({type: PRODUCT_DETAILS_REQUEST, payload: productId});
    let response = fetch('http://127.0.0.1:5000/api/products' + productId);
    let data = response.json();
    dispatch({type: PRODUCT_DETAILS_SUCCESS, payload: data});
  } catch (error) {
    dispatch({type: PRODUCT_DETAILS_FAIL, payload: error.message});
  }
};

export {listProducts, detailsProduct};
