import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import SignUp from './Components/SignUp';
import Login from './Components/Login';

import { signUpUser, loginUser, verifyUser } from './Service/api_helper';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  handleSignUp = async (e, user) => {
    e.preventDefault();    
    const loadedUser = await signUpUser(user)
    console.log(loadedUser);
    this.setState({
      currentUser: loadedUser
      
    })
    
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

    this.setState({
      currentUser: loadedUser
    })
  }

  handleLogout = () => {
    this.setState({
        currentUser: null
    })
    localStorage.removeItem('authToken');

}


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
    </div>
  );
}
}

export default App;
