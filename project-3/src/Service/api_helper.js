import axios from 'axios'
const api = axios.create({ baseURL: "http://localhost:3001" })

export const signUpUser = async (signUpData) => {
    const userData = await api.post('/auth/signup', signUpData);
    localStorage.setItem('authToken', userData.data.token);
    api.defaults.headers.common.authorization = `Bearer ${userData.data.token}`;
    return userData.data.user;
  }