import React from 'react';
import { Switch, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from 'react-bootstrap/Nav'
import ErrorBoundary from './ErrorBoundary'

const App3 = () => {
      return (
          <>
                <Nav>
                <Nav.Item>
                    <Nav.Link href='/'>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='/profile'>Profile</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='/shop'>Shop</Nav.Link>
                </Nav.Item>
            </Nav>

            <Switch>
                <Route exact path='/'>
                    <>
                        <ErrorBoundary>
                            <HomeScreen/>
                        </ErrorBoundary>
                    </>
                </Route>

                <Route exact path='/profile'>
                    <>
                        <ErrorBoundary>
                            <ProfileScreen/>
                        </ErrorBoundary>
                    </>
                </Route>

                <Route exact path='/shop'>
                    <>
                        <ErrorBoundary>
                            <ShopScreen/>
                        </ErrorBoundary>
                    </>
                </Route>
            </Switch>
          </>
    )
}
  const HomeScreen = () => {
    return <header>Home</header>
}

const ProfileScreen = () =>{
    return <header>Profile</header>
}

const ShopScreen = () => {
    throw new Error ('oops, something went wrong')
}

export default App3;
