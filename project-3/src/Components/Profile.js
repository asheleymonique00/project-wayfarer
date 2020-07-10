import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import PostList from './PostList';
import CreatePostForm from './CreatePostFrom';


class Profile extends Component {
    constructor(props) {
    super(props);

    this.state = {
        name: props.profile.name,
        username:props.profile.username,
        img:props.profile.img,
        City: props.profile.City,
        createdAt: props.profile.createdAt     
    }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(props) {    
    return (
        <div>
            <form onSubmit={(e) => this.props.updateUser(e, this.state)}>
                <h1>Edit Account</h1>
                <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleChange} />
                <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleChange}/>
                <input type="text" name="img" placeholder="img" value={this.state.img} onChange={this.handleChange}/>
                <input type="text" name="City" placeholder="city" value={this.state.City} onChange={this.handleChange}/>
                <input type="submit" value="Submit Post" />
           </form>
           <p>{this.state.createdAt}</p>
        <Link to="/show">Show Cities</Link>
        <br></br>
        <Link to="/post/new">Create New Post</Link>
        <Route path="/post/new" render={() => {
        return <CreatePostForm handleSubmit={this.createPost} />
            }} />   
        <br></br>
        <Link to="/post/all">All Posts</Link>        
        <Route exact path="/post/all" render={() => {
                return <PostList posts={this.state.posts} />
            }} /> 
        </div>
    )  
} 

}


export default Profile;