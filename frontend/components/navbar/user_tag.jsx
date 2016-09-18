import React from 'react';
import { hashHistory } from 'react-router';
// import Container from './/_container';

class UserTag extends React.Component {

  constructor(props) {
    super(props);
  }

  goToUserPage() {
    hashHistory.push(`/users/${this.props.id}`);
  }

  componentWillUnmount() {
    $("#fakeLoader").fakeLoader();
  }


  render() {
    return(
      <li className="avatar-container ibm" onClick={this.goToUserPage.bind(this)}>
        <img className="avatar-img ibm" src={this.props.avatar} />
        <span className="avatar-title ibm" onClick={this.goToUserPage.bind(this)}>{this.props.email}</span>
      </li>      
    )
  }
}

export default UserTag;