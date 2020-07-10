import React, { Component } from 'react'
import { getAllCities } from '../Service/api_helper'
import AllCities from './AllCities'
import PostContainer from './PostContainer'
import SingleCity from './SingleCity';
import {Route} from 'react-router-dom';



class Show extends Component {
    constructor(props) {
        super(props);

    }

    

    

    render() {
        return (
            <div>



        




                <h2>Show Post Page</h2>
                <nav>
                {this.props.cities && <AllCities posts={this.props.cities}/>}
                </nav>
                <main>
                <PostContainer />
                </main>
            </div>
        )
    }
}

export default Show;

// return (
//     <div>
//         <h3>Post List</h3>
//         {props.posts.map(post => {
//             return <Link to={`/posts/${post.id}`}><h3>{post.title}</h3></Link>
//         })}
//     </div>


