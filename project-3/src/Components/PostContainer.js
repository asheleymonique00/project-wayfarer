import React, { Component } from 'react';
import {Route, withRouter } from 'react-router-dom';
import {indexPosts} from '../Service/api_helper';
import PostList from './PostList';

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

    readAllPosts = async () => {
        const allPosts = await indexPosts();
        this.setState({
            posts: allPosts
        })
    }

    render() {
        return (
            <div>
                <Route exact path="/post/all" render={() => {
                return <PostList posts={this.state.posts} />
            }} /> 
            </div>
        )
    }
}

export default withRouter(PostContainer);