import { spawn } from "redux-saga/effects";
import newsSaga from "./newsSaga";

export default function* rootSaga() {
	yield spawn(newsSaga)
}