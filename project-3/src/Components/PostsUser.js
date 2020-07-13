import React from 'react';

function PostsUser(props) {
    
    return (
        <div>
        <h3>I am the posts belonging to the user</h3>

        {props.posts.map(post => {
            return(
                <div>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                <button onClick={() => props.destroyPost(post.id)}>Delete</button>
                </div>
            )
        })}


        </div>
    )
}
export default PostsUser