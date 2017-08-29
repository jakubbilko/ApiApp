// import axios from 'axios';
import { push } from 'react-router-redux';
import { LOGIN_SUCCESS, PRODUCTS_FETCHED } from '../constants/ActionTypes';

export function loginSuccess(token) {
  return {
    type: LOGIN_SUCCESS,
    token
  };
}

export function productsFetched() {
  return {
    type: PRODUCTS_FETCHED,
    products: [{
        productID :1,
        name: "Mleko Mlekpol",
        price: 2.5,
        description: "Dobre mleko UHT"
      }]
  };
}

export function login(credentials) {
  // const url = `${BASE_URL}/jwt`;
  //
  // const request = axios
  console.log(credentials);

  return (dispatch) => {
    dispatch(loginSuccess('123'));
    dispatch(push('/products'));
  };
}

export function fetchProducts() {
  return (dispatch) => {
    dispatch(productsFetched());
  };
}
