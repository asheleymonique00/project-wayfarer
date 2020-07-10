import React from 'react';
import { Link } from 'react-router-dom'

function PostList(props) {
   
    return (
        <div>
            <h3>Post List</h3>
            {props.posts.map(post => {
                return <Link to={`/post/${post.id}`}><h3>{post.title}</h3></Link>
            })}
        </div>

    )
}

export default PostList;