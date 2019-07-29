import { fork, all } from "redux-saga/effects";

import { watchGetMoviewRequest } from "../screens/movies/MovieSaga";
export default function* rootSaga() {
  yield all([watchGetMoviewRequest()]);
}
