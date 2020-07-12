import React, { Component } from 'react';
import './App.css';
import { Route, Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';



import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Profile from './Components/Profile';
import Show from './Components/Show';

import PostContainer from './Components/PostContainer';
// import Home from './Components/Home';


import SingleCity from './Components/SingleCity';
import Test from './Components/Test';
import { getAllCities,signUpUser, loginUser, verifyUser, getProfile, putProfile, cityPosts } from './Service/api_helper';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      modal: false,
      userProfile: null,
      cities: null,
      // cityPost:null
    }
  }





  handleSignUp = async (e, user) => {
    e.preventDefault();    
    const loadedUser = await signUpUser(user)
    const userProfile = await getProfile(user);
    console.log(loadedUser);
    this.setState({
      currentUser: loadedUser,
      userProfile: userProfile,
      
    })
    this.props.history.push(`/profile`);
    
  }

  async componentDidMount() {
    const resp = await getAllCities();
    const currentUser = await verifyUser();

//======================================
    // const allPosts = await cityPosts();
// Confirmed API call works
//======================================

      this.setState({
        currentUser: currentUser,
        cities: resp,
        // cityPost: allPosts,
      })
      console.log(this.state.cityPost)
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
    console.log(this.state.cities)
  }

  updateUser = async(e, values) => {
    e.preventDefault();
    console.log(values)
    const updatedUser = await putProfile(values);
    console.log(updatedUser)
    this.setState({
        currentUser: updatedUser
    })
  }

  handleLogout = () => {
    this.setState({
        currentUser: null,
        userProfile: null,
        modal: false,
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


  render() {
    Modal.setAppElement('#root')
  return (
    <div className="App">
      <header className="App-header">
        <h2>Wayfarer</h2>
        <Link to={'/'}><button>Home</button></Link>
        {this.state.currentUser ? <button onClick={this.handleLogout}>Logout</button> : (
          <div>
               {/* <Route path="/" render={() => { 
          return <Home/> }} /> */}
{/* Need to review button - was breaking things */}
         
          <button onClick={() => this.setModalTrue()}>Ready to Begin?</button>
            <Modal isOpen={this.state.modal}>
              <h2>Hello new person</h2>
              <SignUp handleSubmit={this.handleSignUp} />
              <Login handleSubmit={this.handleLogin}/>
              <button onClick={() =>this.setModalFalse()}> Close</button>
            </Modal>
        </div>
       
      )}
      </header>
      <main className="App-main">
  
        <Route path="/profile" render={() => {
         return <Profile updateUser={this.updateUser} profile={this.state.userProfile} />
        }} />
        <Route path="/show" render={() => {
         return<Show  cities={this.state.cities}/>     
        }} />
        <PostContainer />
        
      </main>


      <Route path="/city/:id" render={(props) => {
        return <SingleCity city={this.state.cities} 
                        id={props.match.params.id}  />
            }}  />

           {this.state.userProfile && <Test />}
            {/* {this.state.cityPost ? <Home posts={this.state.cityPost} /> : <p>Loading...</p>} */}
    </div>
  );
}
}

export default withRouter(App);
