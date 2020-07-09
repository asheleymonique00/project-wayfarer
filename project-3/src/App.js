import React, { Component } from 'react';
import './App.css';
import { Route, Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';

import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Profile from './Components/Profile';

import { signUpUser, loginUser, verifyUser, getProfile } from './Service/api_helper';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      modal: false,
      userProfile: null
    }
  }

  handleSignUp = async (e, user) => {
    e.preventDefault();    
    const loadedUser = await signUpUser(user)
    const userProfile = await getProfile(user);
    console.log(loadedUser);
    this.setState({
      currentUser: loadedUser,
      userProfile: userProfile
      
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
      currentUser: loadedUser, 
      userProfile: userProfile
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

setModalTrue = () => {
  this.setState({
    modal: true
  })
}

setModalFalse = () => {
  this.setState({
    modal: false
  })
}

//Create modao for signup and login pop up
  render() {
    Modal.setAppElement('#root')
  return (
    <div className="App">
      <header className="App-header">
        <h2>Wayfarer</h2>
        {this.state.currentUser ? <button onClick={this.handleLogout}>Logout</button> : (
          <div>  
          {/* Wrap signup/login in modals and apply buttons to open close */}
          <button onClick={() => this.setModalTrue()}>New User</button>
            <Modal isOpen={this.state.modal}>
              <h2>Welcome to Wayfarer - Please enter a new username and password</h2>
              <SignUp handleSubmit={this.handleSignUp} />
              <button onClick={() =>this.setModalFalse()}> Close</button>
            </Modal>
          <button onClick={() => this.setModalTrue()}>LogIn</button>
            <Modal isOpen={this.state.modal}>
            <h2>Welcome back to Wayfarer - Please enter your username and password</h2>
              <Login handleSubmit={this.handleLogin}/>
              <button onClick={() =>this.setModalFalse()}> Close</button>
            </Modal>
        </div>
      )}
      </header>
      <main className="App-main">
        {this.state.userProfile && <Link to="/profile">Profile Page</Link>}
        <Route path="/profile" render={() => {
         return <Profile userProfile={this.state.userProfile} />
        }} />     
      </main>
    </div>
  );
}
}

export default withRouter(App);
