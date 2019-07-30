// contants for movies
export const GET_MOVIES = "GET_MOVIES";
export const GET_MOVIES_INPROGRESS = "GET_MOVIES_INPROGRESS";
export const GET_MOVIES_SUCCESS = "GET_MOVIES_SUCCESS";
export const GET_MOVIES_FAILURE = "GET_MOVIES_FAILURE";

export function getMovies(payload) {
  return {
    type: GET_MOVIES,
    payload: payload
  };
}

export function getMoviesProgress(payload) {
  return {
    type: GET_MOVIES_INPROGRESS,
    payload: payload
  };
}

export function getMoviesSuccess(payload) {
  return {
    type: GET_MOVIES_SUCCESS,
    payload: payload
  };
}
export function getMoviesFailure(payload) {
  return {
    type: GET_MOVIES_FAILURE,
    payload: payload
  };
}
