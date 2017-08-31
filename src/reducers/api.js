import { LOGIN_SUCCESS, PRODUCTS_FETCHED, LOGIN_FAIL } from '../constants/ActionTypes';

const INITIAL_STATE = {
  token: '',
  products: [],
  loginError: ''
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.token
      };
    case PRODUCTS_FETCHED:
      return {
        ...state,
        products: action.products
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loginError: action.error
      };
    default:
      return state;
  }
}
