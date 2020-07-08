import axios from 'axios'
const api = axios.create({ baseURL: "http://localhost:3001" })

export const signUpUser = async (signUpData) => {
    const userData = await api.post('/auth/signup', signUpData);
    console.log(userData);
    localStorage.setItem('authToken', userData.data.token);
    api.defaults.headers.common.authorization = `Bearer ${userData.data.token}`;
    return userData.config.data;
  }

  export const loginUser = async (loginData) => {
    const userData = await api.post('/auth/login', loginData);
    console.log(userData);
    localStorage.setItem('authToken', userData.data.token);
    api.defaults.headers.common.authorization = `Bearer ${userData.data.token}`;
    return userData.config.data;
  }

 
export const verifyUser = async () => {    
    const token = localStorage.getItem('authToken');
    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const userData = await api.get('/auth/verify');
      return userData.config.data;
    } else {
      return false;
    }
  }
  