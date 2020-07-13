import React from 'react';

import {Link} from 'react-router-dom';


function PostsUser(props) {
    
    return (
        <div>
        <h3>Your current posts:</h3>

        {props.posts.map(post => {
            return(
                <div>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                <button onClick={() => props.destroyPost(post.id)}>Delete</button>
               
                <Link to={`/profile/post/${post.id}/edit`}><h3>Edit Post</h3></Link>
               
                </div>
            )
        })}


        </div>
    )
}
export default PostsUser