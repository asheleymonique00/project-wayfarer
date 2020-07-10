import React from 'react';

//Function pages show the information
function SinglePost(props) {
    const currentPost = props.posts.filter(post => {
        return post.id === parseInt(props.postId)
    })
    console.log(currentPost);
    return (
        <div>
            {currentPost[0] && (
                <div>
                    <h2>{currentPost[0].title}</h2>
                    <h4>{currentPost[0].description}</h4>
                    <p>Fun Fact: {currentPost[0].fun_fact}</p>
                    <button onClick={() => props.destroyPost(currentPost[0].id)}>Delete</button>
            </div>
            )}
        </div>
    )
}

export default SinglePost;