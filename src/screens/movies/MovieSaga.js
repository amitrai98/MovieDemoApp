import { put, takeLatest } from "redux-saga/effects";
import * as types from "./MovieActions";
import ApiHandler from "../../networking/ApiHandler";
import AppLogger from "../../utility/AppLogger";



export function* handleGetMoviesRequest(action) {
  yield put({ type: types.GET_MOVIES_INPROGRESS});

  try {
    const api = ApiHandler.getInstance();
    response = yield api.getMovies();
    yield put({ type: types.GET_MOVIES_SUCCESS, payload: response });
  } catch (err) {
    AppLogger.log("Error in getting movie list" + err);
    yield put({ type: types.GET_MOVIES_FAILURE, error: err });
  }
}

export function* watchGetMoviewRequest() {
  yield takeLatest(types.GET_MOVIES, handleGetMoviesRequest);
}
