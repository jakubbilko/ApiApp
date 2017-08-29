import { LOGIN_SUCCESS, PRODUCTS_FETCHED } from '../constants/ActionTypes';

const INITIAL_STATE = {
  token: '',
  products: []
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
    default:
      return state;
  }
}
