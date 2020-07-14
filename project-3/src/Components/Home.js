import React, {Component} from 'react';
import { Link } from 'react-router-dom'

import '../App.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic1: {
      title: "Review",
      body: "tgysgsfdgsdgsdgsdgsd"
      },
      topic2: {
      title: "Other review",
      body: "gfdgsdgsdgsdgsd"
      },
      topic3: {
      title: "Comment",
      body: "Great app"
      },
    }
  }
  
    render () {
    return (
      <div>
        <h1>Wayfarer is ...</h1>
        <div className="reviewBox">
          <span className="box">
          <h1>{this.state.topic1.title}</h1>
          <p>{this.state.topic1.body}</p>
          </span>
          <span className="box">
          <h1>{this.state.topic2.title}</h1>
          <p>{this.state.topic2.body}</p>
          </span>
          <span className="box">
          <h1>{this.state.topic3.title}</h1>
          <p>{this.state.topic3.body}</p>
          </span>
          </div>
      </div>
    )
  }
}
export default Home;