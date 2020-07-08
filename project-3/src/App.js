import React, { Component } from 'react';
import './App.css';
import SignUp from './Components/SignUp'

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
    this.setState({
      currentUser: loadedUser
    })
    
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
      <SignUp handleSubmit={this.handleSignUp} />
      </header>
    </div>
  );
}
}

export default App;
