import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Register from './components/Register'
import SignIn from './components/SignIn'
import Main from './components/Main'
import About from './components/About'
import SignOut from './components/SignOut'
import Delete from './components/Delete'
import withAuth from './withAuth';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      user: {
        id: '',
        name: '',
        email:'',
        joined:''
      },
      token: null
    }
  }
  loadUser = (data) => {
    this.setState({
      user: {
        id: data.user.id,
        name: data.user.name,
        email: data.user.email,
        joined: data.user.joined
      },
      token: data.token
    })
    console.log('this.state',this.state);
  }
  render(){
    const {user,token} = this.state;
    return (
      <>
        <nav>
          <Link to='/' style={{margin:'5px'}}>Dashboard</Link>
          <Link to='/about' style={{margin:'5px'}}>About</Link>
          <Link to='/register' style={{margin:'5px'}}>Register</Link>
          <Link to='/signin' style={{margin:'5px'}}>Sign In</Link>
          <Link to='/signout' style={{margin:'5px'}}>Sign Out</Link>
          <Link to='/delete' style={{margin:'5px'}}>Delete</Link>
        </nav>
        <Switch>
          <Route path='/' component={withAuth(Main,user,token)} exact />
          <Route path='/about' component={withAuth(About,user,token)}  />
          <Route path='/register' render={(props) => <Register {...props} loadUser={this.loadUser}/> }/>
          <Route path='/signin' render={(props) => <SignIn {...props} loadUser={this.loadUser}/> } />
          <Route path='/signout' render={(props) => <SignOut {...props} loadUser={this.loadUser}/> } />
          <Route path='/delete' render={(props) => <Delete {...props} user={user}/> } />
        </Switch>
      </>
    )
  }
}

export default App;
