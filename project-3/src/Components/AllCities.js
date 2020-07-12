import React from 'react';
import { Link } from 'react-router-dom';

function AllCities(props) {

    return (
        <div>
            {/* <Link to="/show">Landing Page</Link> */}
            {props.posts.map((post, id) => {
                return (
                <nav className="cityList">
                    <div key={id}>
                        
                        
                    <Link to={`/city/${post.id}`}>
                        <h3>{post.name}</h3>
                        </Link>
                        
                    <h1>{post.id}</h1>
                        

                    {/* <Link to={`/city/${post.id}/all`}>
                    <h2>Posts from {post.name} </h2>
                    </Link>    
                         */}
                        <br></br>
                        <img src= {post.img} alt="city picture" />
                    </div>
                </nav>
                )
            })}
        </div>
    )
}

export default AllCities;