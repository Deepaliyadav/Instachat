import {takeLatest, call, put} from 'redux-saga/effects';
import {
    GET_USER_PROFILE_INFO_ASYNC,
    GET_USER_PROFILE_INFO_SUCCESS,
    GET_USER_PROFILE_INFO_FAILURE
} from './../constants'

export default function* getProfileInfoWalkerSaga(action){
    const result = yield put({type:GET_USER_PROFILE_INFO_ASYNC, action})

    yield put({type:GET_USER_PROFILE_INFO_SUCCESS, action})
    yield put({type:GET_USER_PROFILE_INFO_FAILURE})
}

export default function* getProfileInfoWatcherSaga(){
    takeLatest(GET_USER_PROFILE_INFO_ASYNC, getProfileInfoWalkerSaga)
}