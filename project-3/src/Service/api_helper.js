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
    localStorage.setItem('authToken', userData.data.token);
    api.defaults.headers.common.authorization = `Bearer ${userData.data.token}`;
    return userData.config.data;
  }

    export const getProfile = async (profileRecieved) => {
      const profile = await api.get('/user/profile', profileRecieved)  
      return profile.data;   
  }

  export const putProfile = async (values) => {
    const updatedUser = await api.put('/user/profile', values);
    console.log(updatedUser)
    return updatedUser.data
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

  export const getAllCities = async () => {
    const cities = await api.get('/city/all');
    console.log(cities.data);
    return cities.data;

  }

  export const postPost = async(postData,) => { 
    const newPost = await api.post(`/post/1`, postData);
    console.log(newPost);
    return newPost;
  }

  export const indexPosts = async () => {
    const allPosts = await api.get('/post/all');
    console.log(allPosts)
    return allPosts.data;
    
  }

  //Delete a Post
export const destroyPost = async (id) => {
  const deleteUser = await api.delete(`/post/${id}`)
  return deleteUser.data;
}
