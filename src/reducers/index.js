import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as reducers from './api';

 export default combineReducers({
   ...reducers,
   routing: routerReducer
 });
