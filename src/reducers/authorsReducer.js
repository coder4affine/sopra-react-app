import * as types from '../constants/actionType';

const initialState = {
  loading: false,
  data: [],
  error: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOAD_AUTHORS:
      return { ...state, loading: true };
    case types.LOAD_AUTHORS_SUCCESS:
      return { ...state, loading: false, data: payload };
    case types.LOAD_AUTHORS_FAIL:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};
