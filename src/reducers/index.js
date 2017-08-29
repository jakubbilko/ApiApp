// Set up your root reducer here...
import { combineReducers } from 'redux';
import * as reducers from './api';

 export default combineReducers({
   ...reducers
 });
