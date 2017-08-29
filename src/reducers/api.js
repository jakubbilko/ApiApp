import { LOGIN_FAIL } from '../constants/ActionTypes';

const initialState = {
  token: ''
};


export function loginFail(state = initialState, action) {
  switch (action.type) {
    case LOGIN_FAIL:
      return 'errr';
    default:
      return state;
  }
}
