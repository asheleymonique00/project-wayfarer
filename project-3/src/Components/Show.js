import React, { Component } from 'react'
import { getAllCities } from '../Service/api_helper'
import AllCities from './AllCities'
import PostContainer from './PostContainer'
import SingleCity from './SingleCity';
import {Route} from 'react-router-dom';



class Show extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cities: null
        }
    }

    componentDidMount = async () => {
        const resp = await getAllCities();
        this.setState({
            cities: resp
        })
    }


    

    render() {
        return (
            <div>
                <Route exact path="/city/:id" render={(props) => {
        return <SingleCity city={this.state.cities} 
                        id={props.match.params.id}  />
            }}  />
                <h2>Show Post Page</h2>
                <nav>
                {this.state.cities && <AllCities posts={this.state.cities}/>}
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


