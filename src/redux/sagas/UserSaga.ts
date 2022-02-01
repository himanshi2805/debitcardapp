import {put} from 'redux-saga/effects';
import {getUserCardDetails} from '@app/redux';
import {SET_USER_CARD} from '@app/constants';

export function* getUserCardSaga() {
  try {
    const response: any = yield getUserCardDetails();
    yield put({
      type: SET_USER_CARD,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
}
