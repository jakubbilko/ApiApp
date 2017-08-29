import { LOGIN_SUCCESS } from '../constants/ActionTypes';

const INITIAL_STATE = {
  token: ''
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.token
      };
    default:
      return state;
  }
}
