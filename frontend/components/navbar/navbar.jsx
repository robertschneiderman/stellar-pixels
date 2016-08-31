import React from 'react';
import { withRouter } from 'react-router';
import { Link, hashHistory } from 'react-router';

class Navbar extends React.Component {

  handleClick(router, url) {
    // console.log("url:", url);
    return () => {
          debugger;

      router.push(url);
    }

  };

  listItems() {
    if (this.props.loggedIn) {
      return (
        <ul className="flex-between list-inline">
          <li onClick={this.props.logout}>Sign Out</li>
        </ul>
      )
    } else {
        // debugger;
      return (  
        <ul className="navbar-nav flex-between">
          <li onClick={this.props.openModal.bind(this, 'signup')}>Sign Up</li>
          <li onClick={this.props.openModal.bind(this, 'login')}>Log In</li>
        </ul>
      )
    }
  }

  render() {
    return (
      <nav className="navbar flex-between">
        <h1 className="logo">Stellar Pixels</h1>
        {this.listItems()}
      </nav>
    )
  }
}

export default withRouter(Navbar);