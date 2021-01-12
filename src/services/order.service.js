import axios from '../utils/axios';

export const bookApartment = (payload) => {
  return axios.post('/orders', payload);
};
