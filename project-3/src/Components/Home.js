import React, {Component} from 'react';
import { Link } from 'react-router-dom'



function Home(props){
        console.log(props.posts)
        return (
            <div>
              <h1>Hello I am the city posts test subject</h1>
                    {props.posts.map((post, id) => {
                        return(
                            
                            <div key={id}>
                                <h2><Link to={`/post/${post.id}`}><h3>{post.title}</h3></Link></h2>
                            {post.body}
                            <Link to={`/post/${post.id}/edit`}>Edit Post</Link>
                            <button onClick={() => props.destroyPost(post.id)}>Delete</button>
                            </div>
                        )
                        })}
                    </div>
                        )
                        }         
        

export default Home;