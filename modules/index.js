import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import counter, { watchCounter } from './basic/counter';
import register, { registerSaga } from './auth/register';
import profile, { profileSaga} from './auth/profile'
import login, {loginSaga} from './auth/login'
const rootReducer = combineReducers({
  counter, register, login, profile

});

export function* rootSaga() {
  yield all([registerSaga(), loginSaga(), profileSaga()]);
}

export default rootReducer;