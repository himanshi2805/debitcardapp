import {SET_USER_CARD, UPDATE_WEEKLY_LIMIT} from '@app/constants';
import DefaultState from './default';

const INIT_STATE = DefaultState.user;

const UserReducer = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case SET_USER_CARD:
      return {...state, user: action.payload};
    case UPDATE_WEEKLY_LIMIT:
      return {...state, weeklyLimit: action.payload};
    default:
      return state;
  }
};

export default UserReducer;
