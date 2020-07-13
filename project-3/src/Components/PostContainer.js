import React, { Component } from 'react';
import {Route, withRouter } from 'react-router-dom';
import { destroyPost } from '../Service/api_helper';
import PostList from './PostList';
import CreatePostForm from './CreatePostFrom';
import SinglePost from './SinglePost';
class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            cityPosts: []
        }
    }
    



    postsCity = async () => {
        const cityPosts = await cityPosts();
        this.setState({
            cityPosts:cityPosts
        })
    }


    
    //Delete Post
    destroyPost = async (id) => {
        await destroyPost(id);
        const allPosts = this.state.posts;
        const remaiingPosts = allPosts.filter(post => {
            return post.id !== id
        })
        this.setState({
            posts: remaiingPosts
        })
        this.props.history.push('/post/all');
    }
    render() {
        return (
            <div>
               
                
               
            
            </div>
        )
    }
}
export default withRouter(PostContainer);