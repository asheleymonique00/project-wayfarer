import React from 'react';
import { Link } from 'react-router-dom'

function SingleCity(props) {
    const hello = props.city.filter(cities => {
        return parseInt(props.id) === cities.id;
    })
    return(
    <div>
        <h1> Welcome to {hello[0].name}</h1>
        <img src={hello[0].img} alt={hello[0].name} />
        <h2>Located in: {hello[0].state},  {hello[0].country}</h2>

        
      <a href={`/post/city/${hello[0].id}/all`} onClick={props.handleClick}>
        Click me
      </a>

        {/* <Link to={`/post/city/${hello[0].id}/all`}>Posts from here</Link> */}
        </div>
        )
    }

export default SingleCity;

//img
//country
//state
//id - need for posts