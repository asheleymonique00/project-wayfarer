import React, { Component } from 'react';
import {Route, withRouter } from 'react-router-dom';
import { indexPosts, destroyPost, postPost } from '../Service/api_helper';
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
    componentDidMount(){
        this.readAllPosts();
    }


    createPost = async (e, postData) => {
        e.preventDefault();
        // console.log(postData);
        const newPost = await postPost(postData);
        const posts = this.state.posts;
        posts.push(newPost.data);
        this.setState({
            posts: posts
        })
        this.props.history.push('/post/all');
    }

    postsCity = async () => {
        const cityPosts = await cityPosts();
        this.setState({
            cityPosts:cityPosts
        })
    }


    readAllPosts = async () => {
        const allPosts = await indexPosts();
        this.setState({
            posts: allPosts
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
                <Route path="/post/new" render={() => {
                return <CreatePostForm handleSubmit={this.createPost} />
            }} />
                <Route exact path="/post/all" render={() => {
                return <PostList posts={this.state.posts} />
            }} />
                <Route exact path="/post/:id" render={(props) => {
                return <SinglePost postId={props.match.params.id} posts={this.state.posts} destroyPost={this.destroyPost}/>
            }} />
            
            </div>
        )
    }
}
export default withRouter(PostContainer);