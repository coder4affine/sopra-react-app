import { combineReducers } from 'redux';
import course from './coursesReducer';
import authors from './authorsReducer';

export default combineReducers({ course, authors });
