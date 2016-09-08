import React from 'react';
// import Container from './/_container';

class FollowBtn extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.getFollowState();
  }

  render() {
    let className = this.props.followed ? "btn-unfollow" : "btn-follow";
    let btnText = this.props.followed ? "Following" : "Follow";
    return (
      <button className={className} onClick={this.props.follow}><span>{btnText}</span></button>
    )
  }
}

export default FollowBtn;