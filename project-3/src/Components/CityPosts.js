import React, {Component} from 'react';
import { Link } from 'react-router-dom'



function CityPosts(props){
        // console.log(props.posts)
        return (
            <div>
                    {props.posts.map((post, id) => {
                        return(
                            <div key={id}>
                                 <h1>I belong to city id: {post.cityId}</h1>
                                <h2><Link to={`/post/${post.id}`}><h3>{post.title}</h3></Link></h2>
                            {post.body}
                            {/* <Link to={`/post/${post.id}/edit`}>Edit Post</Link> */}
                            <button onClick={() => props.destroyPost(post.id)}>Delete</button>
                            </div>
                        )
                        })}
                    </div>
                        )
                        }         
        

export default CityPosts;