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
          <li className="avatar-container ibm">
            <img className="avatar-img ibm" src={this.props.avatar} />
            <span className="avatar-title ibm">{this.props.email}</span>
          </li>
          <li className="ibm" onClick={this.props.logout}>Sign Out</li>
        </ul>
      )
    } else {
        // debugger;
      return (  
        <ul className="navbar-nav fbc">
          <li onClick={this.props.openModal.bind(this, 'signup')}>Sign Up</li>
          <li onClick={this.props.openModal.bind(this, 'login')}>Log In</li>
        </ul>
      )
    }
  }

  render() {
    let navbarClass = "navbar fbc";
    let logoSrc = "/assets/svg/logo.svg";

    if (this.props.location.pathname == '/') {
      navbarClass = 'navbar-home fbc';
      logoSrc = '/assets/svg/logo-white.svg'
    }
     
    return (
      <nav className={navbarClass}>
        <img className="logo ibm" src={logoSrc} alt=""/>
        {this.listItems()}
      </nav>
    )
  }
}

export default withRouter(Navbar);