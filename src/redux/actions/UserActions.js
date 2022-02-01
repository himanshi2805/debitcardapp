import {LOG_OUT, UPDATE_WEEKLY_LIMIT} from '@app/constants';

export const updateWeeklyLimit = payload => ({
  type: UPDATE_WEEKLY_LIMIT,
  payload,
});

export const userLogout = () => ({
  type: LOG_OUT,
});
