import axios from '../utils/axios';

export const loginUser = (payload) => {
  return axios.post('/users/login', payload);
};
