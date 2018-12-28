import * as types from '../constants/actionType';

const initialState = {
  loading: false,
  data: [],
  error: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOAD_COURSES:
      return { ...state, loading: true };

    case types.LOAD_COURSES_SUCCESS:
      return { ...state, loading: false, data: payload };

    case types.LOAD_COURSES_FAIL:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};
