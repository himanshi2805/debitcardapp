import {takeLatest} from 'redux-saga/effects';
import {GET_USER_CARD} from '@app/constants';
import {getUserCardSaga} from './UserSaga';

export default function* rootSaga() {
  yield takeLatest(GET_USER_CARD, getUserCardSaga);
}
