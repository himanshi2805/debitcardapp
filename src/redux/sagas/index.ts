import {takeLatest} from 'redux-saga/effects';
import {GET_USER} from '@app/constants';
import {getUserSaga} from './UserSaga';

export default function* rootSaga() {
  yield takeLatest(GET_USER, getUserSaga);
}
