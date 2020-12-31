import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://apt-booking-api.herokuapp.com/',
});

export default axiosInstance;
