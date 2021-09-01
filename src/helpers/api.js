import axios from 'axios';

const user = JSON.parse(localStorage.getItem('user'));

const axiosIntance = axios.create({
  baseURL: 'http://baseapp.tk',
  headers: {
    Authorization: user ? `Bearer ${user.accessToken}` : "",
  },
});

export default axiosIntance;