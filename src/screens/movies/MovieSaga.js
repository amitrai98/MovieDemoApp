import { put, takeLatest } from "redux-saga/effects";
import * as types from "./MovieActions";
import ApiHandler from "../../networking/ApiHandler";
import AppLogger from "../../utility/AppLogger";



export function* handleGetMoviesRequest(action) {
  
  try {
    yield put({
      type: types.GET_MOVIES_INPROGRESS
    });
    const api = ApiHandler.getInstance();
    const response = yield api.getMovies();
    yield put({
      type: types.GET_MOVIES_SUCCESS,
      data: response
    });
  } catch (e) {
    yield put({ type: types.GET_MOVIES_FAILURE, error: e });
  }
}

export function* watchGetMoviewRequest() {
  yield takeLatest(types.GET_MOVIES, handleGetMoviesRequest);
}
