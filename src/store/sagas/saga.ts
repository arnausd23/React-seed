import {put, takeLatest} from 'redux-saga/effects'
import {AxiosHttpService} from "../../services/AxiosHttpService";

import {ADD_PLAYER} from "../actions/actions";
import {CustomToast} from "../../toast";

export function* fetchData(action) {
    try {
        const data = yield AxiosHttpService.get('/player');
        yield put({type: "FETCH_SUCCEEDED", data});
    } catch (error) {
        yield put({type: "FETCH_FAILED", error});
    }
}

export function* fetchDataSuccess() {
    yield CustomToast.openToast('success');
}

export function* fetchDataError() {
    yield CustomToast.openToast('error');
}

export default function* rootSaga() {
    yield takeLatest(ADD_PLAYER, fetchData);
    yield takeLatest("FETCH_SUCCEEDED", fetchDataSuccess);
    yield takeLatest("FETCH_FAILED", fetchDataError);
}