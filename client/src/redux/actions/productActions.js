import {
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

export {listProducts};
