import {createAction, handleActions} from 'redux-actions';
import {call, delay, put, takeLatest, select, throttle} from 'redux-saga/effects';
import {HYDRATE} from "next-redux-wrapper"
import axios from 'axios'

const SERVER = 'http://127.0.0.1:5000'
const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT fefege..."
}
export const initialState = {
    isProfiled: false
}

const PROFILE_REQUEST = 'auth/PROFILE_REQUEST';
const PROFILE_FAILURE = 'auth/PROFILE_FAILURE';

export const profileRequest = createAction(PROFILE_REQUEST, data => data)

export const userProfile= user => (
    {type: PROFILE_REQUEST, payload: user}
)
export function* profileSaga() {
    yield takeLatest(PROFILE_REQUEST, list);
}
function* list(action) {
    try {
        console.log(" 핵심 " + JSON.stringify(action))
        const response = yield call(profileAPI, action.payload)
        yield put({type: PROFILE_REQUEST, payload: response.data})
        yield put(window.location.href = '/auth/profile')
    } catch (error) {
        yield put({type: PROFILE_FAILURE, payload: error.message})
    }
}
const profileAPI = payload => axios.post(
    `${SERVER}/user/profile`,
    payload,
    {headers}
)
const profile = handleActions({
    [HYDRATE]: (state, action) => ({
        ...state, ...action.payload
    })
}, initialState) 

export default profile
