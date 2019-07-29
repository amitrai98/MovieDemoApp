import { put, takeLatest } from "redux-saga/effects";
import * as types from "./MovieActions";
import ApiHandler from "../../networking/ApiHandler";
import AppLogger from "../../utility/AppLogger";
export function* handleGetMoviesRequest(action) {
  types.getMoviesProgress();

  try {
    const api = ApiHandler.getInstance();
    response = yield api.getMovies(action.payload.driverObj);
    yield types.getMoviesSuccess({ payload: response });
  } catch (error) {
    AppLogger.log("Error in getting movie list" + error);
  }
}

export function* watchGetMoviewRequest() {
  yield takeLatest(types.GET_MOVIES, handleGetMoviesRequest());
}
