import * as types from '../constants/actionType';

export const getAuthors = () => {
  return dispatch => {
    dispatch({ type: types.LOAD_AUTHORS });
    return fetch('http://localhost:3004/authors')
      .then(res => res.json())
      .then(data => {
        dispatch({ type: types.LOAD_AUTHORS_SUCCESS, payload: data });
      })
      .catch(err => {
        dispatch({ type: types.LOAD_AUTHORS_FAIL, payload: err });
      });
  };
};

export const saveAuthor = () => {};
