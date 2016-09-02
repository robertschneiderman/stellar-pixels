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
        <ul className="navbar-nav fbc">
          <li className="ibm">
            <img className="img-avatar ibm" src="https://api.adorable.io/avatars/45/abott@adorable.io.png" />
            <span className="title-user ibm">{this.props.email}</span>
          </li>
          <li className="ibm" onClick={this.props.logout}>Sign Out</li>
        </ul>
      )
    } else {
        // debugger;
      return (  
        <ul className="navbar-nav">
          <li onClick={this.props.openModal.bind(this, 'signup')}>Sign Up</li>
          <li onClick={this.props.openModal.bind(this, 'login')}>Log In</li>
        </ul>
      )
    }
  }

  render() {
    return (
      <nav className="navbar fbc">
        <h1 className="logo ibm">Stellar Pixels</h1>
        {this.listItems()}
      </nav>
    )
  }
}

export default withRouter(Navbar);