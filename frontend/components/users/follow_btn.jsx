import React from 'react';
// import Container from './/_container';

class FollowBtn extends React.Component {

  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;
    this.usersId = this.props.user.id;
    this.follow = this.props.follow;
  }

  componentDidMount() {
    // this.props.getFollowState();
  }

  followed() {
          
    if (this.props.currentUser.broadcasters && this.props.currentUser.broadcasters[this.props.user.id]) {
      this.className = "btn-unfollow";
      this.btnText = "Following";
    } else {
      this.className = "btn-follow";
      this.btnText = "Follow";      
    }
  }  

  render() {
    this.followed();
    // debugger;
    if (this.props.currentUser.id !== this.props.user.id) {
      return(
        <button 
          className={this.className} 
          onClick={this.follow.bind(this, this.props.user.id)}>
            <span>{this.btnText}</span>
        </button>
      );    
    } else {
      return <span></span>;
    }
  }
}

export default FollowBtn;