import {connect} from 'react-redux';
import FollowBtn from './follow_btn';

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = (dispatch) => {
  return {
    follow: items => dispatch(follow(items)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowBtn);
