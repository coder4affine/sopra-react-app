import * as types from '../constants/actionType';

export const getCourses = () => {
  return dispatch => {
    dispatch({ type: types.LOAD_COURSES });
    return fetch('http://localhost:3004/courses')
      .then(res => res.json())
      .then(data => {
        dispatch({ type: types.LOAD_COURSES_SUCCESS, payload: data });
      })
      .catch(err => {
        dispatch({ type: types.LOAD_COURSES_FAIL, payload: err });
      });
  };
};

export const saveCourse = () => {};
