import React, {Component} from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { cityPosts, postPost } from '../Service/api_helper';
import CityPosts from './CityPosts';
import CreatePostForm from './CreatePostFrom'; 



class SingleCity extends Component {
  constructor(props) {
    super(props);


    this.state = {
        posts: []
    }
  }

  async componentDidMount() {
    const posts = await cityPosts(this.props.id);
    console.log(this.props.id)
    console.log(posts)
    this.setState({
      posts: posts 
    })
  }

//========MAKE CREATE POSTS FUNCTION==================

createPost = async (e, postData) => {
  e.preventDefault();
  console.log(postData);
  const newPost = await postPost(postData, this.props.id);
  const posts = this.state.posts;
  posts.push(newPost.data);
  this.setState({
     posts: posts
  })
 
}

//===================TESTING==================
   
    render() {
      const hello = this.props.city.filter(cities => {
        return parseInt(this.props.id) === cities.id;
    })
    return(
    <div>
        <h1> Welcome to {hello[0].name}</h1>
        <img src={hello[0].img} alt={hello[0].name} />
        <h2>Located in: {hello[0].state},  {hello[0].country}</h2>

    {this.state.posts ? <CityPosts posts={this.state.posts}/> : <p>Loading...</p> }

    {this.state.posts ?<CreatePostForm handleSubmit={this.createPost}/> : <p>Loading...</p> }
        </div>
        )
    }
  }
export default withRouter(SingleCity);

