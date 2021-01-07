import axios from '../utils/axios';

export const loginUser = (payload) => {
  return axios.post('/users/login', payload);
};

export const registerUser = (payload) => {
  return axios.post('/users/register', payload);
};
