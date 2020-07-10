import React, { Component } from 'react';
import {Route, withRouter } from 'react-router-dom';
import {postPost, indexPosts} from '../Service/api_helper';
import PostList from './PostList';
import CreatePostForm from './CreatePostFrom';

class PostContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        this.readAllPosts();
    }

    createPost = async (e, postData) => {
        e.preventDefault();
        const newPost = await postPost(postData);
        const posts = this.state.posts;
        posts.push(newPost.data);
        this.setState({
            posts: posts
        })
    }

    readAllPosts = async () => {
        const allPosts = await indexPosts();
        this.setState({
            posts: allPosts
        })
    }

    render() {
        return (
            <div>
                <Route path="/post/new" render={() => {
                return <CreatePostForm handleSubmit={this.createPost} />
            }} />   
                <Route exact path="/post/all" render={() => {
                return <PostList posts={this.state.posts} />
            }} /> 
            </div>
        )
    }
}

export default withRouter(PostContainer);