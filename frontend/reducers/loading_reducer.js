// import * as API from '../util/session_api_util';
// import * as ACTIONS from '../actions/session_actions';
import merge from 'lodash/merge';
import router from 'react-router';

const LoadingReducer = (state = {}, action) => {
  
  switch (action.type) {

    case "START_LOADING":
      return merge({}, state, {[action.key]: true});
    case "STOP_LOADING":
      return merge({}, state, {[action.key]: false});
    default:
      return state;

  }
};

export default LoadingReducer;