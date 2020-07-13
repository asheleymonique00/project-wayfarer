import React, { Component } from 'react'
import { getAllCities, cityPosts, destroyPost, postPost, editPost } from '../Service/api_helper'
import AllCities from './AllCities'
import PostContainer from './PostContainer'
import SingleCity from './SingleCity';
import {Route} from 'react-router-dom';


import Modal from 'react-modal';

class Show extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cityPost:null,
            modal: false,
            cities: null
          }
          
    }

    
    async componentDidMount() {
        const resp = await getAllCities();
        this.setState({
            cities: resp,
        })
        console.log(this.state.cities)
    }



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
            // this.props.history.push('/');
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


    render() {
        Modal.setAppElement('#root')
        return (
            <div>

                <h2>All Cities</h2>
                <nav>
                {this.props.cities && <AllCities  handleClick={this.handleClick} cities={this.props.cities}/>}
                </nav>
             
                
             {/* <button onClick={() => this.setModalTrue()}>Edit This Post</button>

             <Modal isOpen={this.state.modal}> 

            <CityPostsEdit posts={this.state.cityPost} updatePost={this.updatePost} />
              
             <button onClick={() =>this.setModalFalse()}> Close</button>
            </Modal> */}
                                       
            </div>
        )
    }
}

export default Show;
