import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import { cityPosts } from '../Service/api_helper';
import CityPosts from "./CityPosts"

class SingleCity extends Component {
  constructor(props) {
    super(props);


    this.state = {
        posts: []
    }
  }

  async componentDidMount() {
    const posts = await cityPosts(this.props.id);
    console.log(this.props.id)
    console.log(posts)
    this.setState({
      posts: posts 
    })
  }


   
    render() {
      const hello = this.props.city.filter(cities => {
        return parseInt(this.props.id) === cities.id;
    })
    console.log(hello)
    return(
    <div>
        <h1> Welcome to {hello[0].name}</h1>
        <img src={hello[0].img} alt={hello[0].name} />
        <h2>Located in: {hello[0].state},  {hello[0].country}</h2>

    {this.state.posts ? <CityPosts posts={this.state.posts}/> : <p>Loading...</p> }
        </div>
        )
    }
  }
export default SingleCity;

