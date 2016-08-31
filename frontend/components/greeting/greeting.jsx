import React from 'react';
import { Link } from 'react-router';

const personalGreeting = (currentUser, logout) => (
  <hgroup>
    <h1>Hi, ${currentUser.username}</h1>
    <button className="header-button" onClick={logout}>Log Out</button>
  </hgroup>
);

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login" activeClassName="current">Login</Link>
    &nbsp;or&nbsp;    
    <Link to="/signup" activeClassName="current">Sign up!</Link>
  </nav>
);

function greeting({currentUser, logout}) {
  if (currentUser) {
    return personalGreeting(currentUser, logout);
  } else {
    sessionLinks();
  }
}

export default greeting;