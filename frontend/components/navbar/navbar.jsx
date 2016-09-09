import React from 'react';
import { withRouter } from 'react-router';
import { Link, hashHistory } from 'react-router';
import UserTag from '../navbar/user_tag'

class Navbar extends React.Component {

  handleClick(router, url) {
    // console.log("url:", url);
    return () => {
          debugger;

      router.push(url);
    }

  };

  logoClick(e) {
    e.preventDefault();
    hashHistory.push('/feed');
  }

  listItems() {
    if (this.props.loggedIn) {
      return (
        <ul className="navbar-nav">
          <UserTag id={this.props.id} avatar={this.props.avatar} email={this.props.email} />
          <li onClick={this.props.openUploadModal} className="btn-upload-container ibm">
            <img className="btn-upload-img ibm" src="/assets/svg/upload.svg" alt=""/>
            <span className="btn-upload-text ibm">Upload</span>
          </li>
          <li className="ibm" onClick={this.props.logout}>Sign Out</li>
        </ul>
      )
    } else {
        // debugger;
      return (  
        <ul className="navbar-nav">
          <li onClick={this.props.openSessionModal.bind(this, 'signup')}>Sign Up</li>
          <li onClick={this.props.openSessionModal.bind(this, 'login')}>Log In</li>
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
        <img className="logo ibm" onClick={this.logoClick.bind(this)} src={logoSrc} alt=""/>
        {this.listItems()}
      </nav>
    )
  }
}

export default withRouter(Navbar);