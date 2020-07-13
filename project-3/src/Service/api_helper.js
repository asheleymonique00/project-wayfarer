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

    return cities.data;

  }
//CREATE NEW POSTS
  export const postPost = async(postData, id) => { 
    const newPost = await api.post(`/post/${id}`, postData);
    console.log(newPost)
    return newPost;
  }

 

  //Delete a Post
export const destroyPost = async (id) => {
  const deletePost = await api.delete(`/post/${id}`)
  return deletePost.data;
}

//Get posts by city id
export const cityPosts = async (id) => {
  const posts = await api.get(`post/city/${id}/all`)
  return posts.data;
}

//EDIT POST
export const editPost = async (id, postData) => {
  const updatedPost = await api.post(`/post/${id}`, postData);
  console.log(updatedPost)
  return updatedPost.data;
}


//GET USER POSTS
export const getUserPosts = async () => {
  const allPosts = await api.get('/post/user');
  return allPosts.data
}
