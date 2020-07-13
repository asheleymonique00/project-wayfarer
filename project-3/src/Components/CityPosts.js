import React, {Component} from 'react';




function CityPosts(props){
       console.log(props.posts)
        return (
            <div>
                    {props.posts.map((post, id) => {
                        return(
                            <div key={id}>
                                Single Posts
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                            </div>
                        )
                        })}
                    </div>
                        )
                        }         
        

export default CityPosts;