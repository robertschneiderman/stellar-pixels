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

  searchClick(e) {
    e.preventDefault();
    hashHistory.push('/search');
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

    if (this.props.location.pathname == '/search') {
      navbarClass = 'navbar fbc not-fixed';      
    }

    let searchIconClass = "navbar-search-container";

    if (!this.props.loggedIn) {
      searchIconClass = 'navbar-search-container none';      
    }    
     
    return (
      <nav className={navbarClass}>
        <img className="logo ibm" onClick={this.logoClick.bind(this)} src={logoSrc} alt=""/>

        <div className={searchIconClass} onClick={this.searchClick.bind(this)}>
          <svg ibm xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451 451" width="19" height="19"><path d="M447.05 428l-109.6-109.6c29.4-33.8 47.2-77.9 47.2-126.1C384.65 86.2 298.35 0 192.35 0 86.25 0 .05 86.3.05 192.3s86.3 192.3 192.3 192.3c48.2 0 92.3-17.8 126.1-47.2L428.05 447c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.2-5.2 5.2-13.8 0-19zM26.95 192.3c0-91.2 74.2-165.3 165.3-165.3 91.2 0 165.3 74.2 165.3 165.3s-74.1 165.4-165.3 165.4c-91.1 0-165.3-74.2-165.3-165.4z" fill="#64c9fb"/></svg>
        </div>

        {this.listItems()}
      </nav>
    )
  }
}

export default withRouter(Navbar);