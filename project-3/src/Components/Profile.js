import React, {Component} from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import PostList from './PostList';
import Modal from 'react-modal';
import SinglePost from './SinglePost';
import CityPostsEdit from './CityPostsEdit';
import PostsUser from './PostsUser';
import { getUserPosts, destroyPost, editPost } from '../Service/api_helper';

class Profile extends Component {
    constructor(props) {
    super(props);

    this.state = {
        modal: false,
        name: props.profile.name,
        email: props.profile.email,
        username:props.profile.username,
        img:props.profile.img,
        City: props.profile.City,
        createdAt: props.profile.createdAt,
       userPosts: [],
    
    }

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    setModalTrue = () => {
        this.setState({
          modal: true
        })
      }
      
      setModalFalse = () => {
        this.setState({
          modal: false
        })
      }
      
      async componentDidMount() {
        const posts = await getUserPosts();
        this.setState({
            userPosts: posts
        })
        console.log(this.state.userPosts)
      }

      destroyPost = async(id) => {
        await destroyPost(id)
        const allPosts = this.state.userPosts;
        const remainingPosts = allPosts.filter(post => {
            return post.id  !== id
        })
        this.setState({
            userPosts: remainingPosts
        })
        console.log(this.state.userPosts)
    }
//=================================================================
    updatePost = async(e, id, values) => {
        e.preventDefault();
        console.log(e, id, values)
        const updatedPost = await editPost(id, values);
        const allPosts = this.state.userPosts;
        const editedPosts = allPosts.map(post => {
            return post.id === parseInt(id) ? updatedPost : post
        }) 
        this.setState({
            userPosts: editedPosts
        })
        this.props.history.push('/profile'); 
    }
//=========================================================================

    


    render(props) {  
        Modal.setAppElement('#root')  
    return (
        <div>

            <img src={this.state.img} alt="profile pic" />
            <h2>Username: {this.state.username}</h2>
            <h2>Current City: {this.state.city}</h2>
            <h2>Email: {this.state.email}</h2>
            <p>Account Created: {this.state.createdAt}</p>
            
            <button onClick={() => this.setModalTrue()}>Edit Profile</button>
            <Modal isOpen={this.state.modal}>

            <form onSubmit={(e) => this.props.updateUser(e, this.state)}>
                <h1>Edit Account</h1>
                <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleChange} />
                <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleChange}/>
                <input type="email" name="email" placeholder="email" value={this.state.email} onChange={this.handleChange}/>
                <input type="text" name="img" placeholder="img" value={this.state.img} onChange={this.handleChange}/>
                <input type="text" name="City" placeholder="city" value={this.state.City} onChange={this.handleChange}/>
                <input type="submit" value="Submit Post" />
           </form>

           <button onClick={() =>this.setModalFalse()}>Return</button>
            </Modal>


            <button><Link to="/show">Show Cities</Link></button>
        
        <br></br>
        <Route exact path="/profile" render={(props) => {
        return <PostsUser destroyPost={this.destroyPost} posts={this.state.userPosts} /> 
     }} />

        <Route exact path="/profile/post/:id/edit" render={(props) => (
                    <CityPostsEdit posts={this.state.userPosts} updatePost={this.updatePost} postId={props.match.params.id} />
                )} />

            


        </div>
        )  
    } 

}


export default withRouter(Profile);