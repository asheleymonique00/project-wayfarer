import React, { Component } from 'react';
import './App.css';
import { Route, Link, withRouter } from 'react-router-dom';

import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Profile from './Components/Profile';

import { signUpUser, loginUser, verifyUser, getProfile } from './Service/api_helper';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
      // id: null,
      // name: '',
      // username: '',
      // "img": null,
      // "createdAt": "2020-07-08T16:34:23.861Z",
      // "email": null,
      // "City": null,
      // "Posts": []
    }
  }

  handleSignUp = async (e, user) => {
    e.preventDefault();    
    const loadedUser = await signUpUser(user)
    const userProfile = await getProfile(user);
    console.log(loadedUser);
    this.setState({
      currentUser: loadedUser
      
    })
    this.props.history.push(`/profile`);
    
  }

  async componentDidMount() {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({
        currentUser: currentUser
      })
    }
  }

  handleLogin = async (e, user) => {
    e.preventDefault();
    const loadedUser = await loginUser(user);
    const userProfile = await getProfile(user);
    this.setState({
      currentUser: loadedUser
    })
    this.props.history.push(`/profile`);
  }

  handleLogout = () => {
    this.setState({
        currentUser: null
    })
    localStorage.removeItem('authToken');
    this.props.history.push(`/`);
}

//Create modao for signup and login pop up
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Wayfarer</h2>
        {this.state.currentUser ? <button onClick={this.handleLogout}>Logout</button> : (
        <div>          
          <SignUp handleSubmit={this.handleSignUp} />
          <Login handleSubmit={this.handleLogin}/>
        </div>
      )}
      </header>
      <main className="App-main">
        {this.state.currentUser && <Link to="/profile">Profile Page</Link>}
        <Route path="/profile" render={() => {
         return <Profile currentUser={this.state.currentUser} />
        }} />     
      </main>
    </div>
  );
}
}

export default withRouter(App);
