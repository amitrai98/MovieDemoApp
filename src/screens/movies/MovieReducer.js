import * as types from "../movies/MovieActions"

const initialState = {
  data: {},
  isFetching: false,
  success: false,
  failure: false,
  error: {}
};

export default function movieReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.GET_MOVIES_INPROGRESS:
      return {
        ...state,
        data: [],
        success: false,
        failure: false,
        isFetching: true
      };
    case types.GET_MOVIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        success: true,
        failure: false,
        data: action.data
      };
    case types.GET_MOVIES_FAILURE:
      return {
        ...state,
        isFetching: false,
        success: false,
        failure: true,
        error: action.error
      };
    default:
      return state;
  }
}
