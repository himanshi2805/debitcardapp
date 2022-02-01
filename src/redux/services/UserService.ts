import axios from 'axios';
import {API_GET_USER} from '@app/constants';

export const userLogin = async params => {
  const response = await axios.post(API_GET_USER, params);
  return response.data;
};
