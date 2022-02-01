import axios from 'axios';
import {API_GET_USER_CARD} from '@app/constants';

// Get User Card Details
export const getUserCardDetails = async () => {
  const response = await axios.get(API_GET_USER_CARD);
  return response.data;
};
