import { takeLatest, put } from 'redux-saga/effects'
import {AxiosHttpService} from "../../services/AxiosHttpService";

import {ADD_PLAYER} from "../actions/actions";

export function* fetchData(action) {
    try {
        const data = yield AxiosHttpService.get('/player');
        yield put({type: "FETCH_SUCCEEDED", data});
    } catch (error) {
        yield put({type: "FETCH_FAILED", error});
    }
}

export default function* rootSaga() {
    yield takeLatest(ADD_PLAYER, fetchData)
}