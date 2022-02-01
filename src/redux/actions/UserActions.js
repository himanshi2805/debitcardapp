import {GET_USER_CARD, LOG_OUT, UPDATE_WEEKLY_LIMIT} from '@app/constants';

export const getUserCard = () => ({
  type: GET_USER_CARD,
});

export const updateWeeklyLimit = payload => ({
  type: UPDATE_WEEKLY_LIMIT,
  payload,
});

export const userLogout = () => ({
  type: LOG_OUT,
});
