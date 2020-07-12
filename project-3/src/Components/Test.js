import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

import Home from './Home';
import TestEdit from './TestEdit';
import { cityPosts, destroyPost, postPost, editPost } from '../Service/api_helper';

class Test extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        cityPost:null
      }
    }
    
  //=================== EVERYTHING HERE IS CURRENTLY ONLY GOING TO USER ID 1===  
    //Set State of Posts
    async componentDidMount() {
        const allPosts = await cityPosts();
        this.setState({
            cityPost: allPosts
        })
    }


    destroyPost = async (id) => {
        await destroyPost(id);
        this.props.history.push('/');
        }
    
//USER MUST BE LOGGED ON TO POST NEW
        createPost = async (e, postData) => {
            e.preventDefault();
            // console.log(postData);
            const newPost = await postPost(postData);
            const posts = this.state.posts;
            posts.push(newPost.data);
            this.setState({
               cityPost: posts
            })
            this.props.history.push('/');
        }
//======= USER MUST BE LOGGED IN TO EDIT
        updatePost = async(e, id, values) => {
            e.preventDefault();
            const updatedPost = await editPost(id, values);
            const allPosts = this.state.cityPost;
            const editedPosts = allPosts.map(post => {
                return post.id === parseInt(id) ? updatedPost : post
            }) 
            this.setState({
                cityPost: editedPosts
            })
            this.props.history.push('/');
        }








    render(){
        return(
            <div>
           {this.state.cityPost && <Home createPost={this.createPost} destroyPost={this.destroyPost} posts={this.state.cityPost}/>}
            
            
           <Route exact path="/post/:id/edit" render={(props) => {
                    return <TestEdit posts={this.state.cityPost} updatePost={this.updatePost} postId={props.match.params.id} />
                }} />
            
            
            </div>
        )
    }
}

export default withRouter(Test);