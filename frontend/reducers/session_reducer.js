// import * as API from '../util/session_api_util';
// import * as ACTIONS from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = _nullUser, action) => {

  switch (action.type) {

    case "RECEIVE_CURRENT_USER":
      return merge({}, _nullUser, {action.currentUser});

    case "LOGOUT":
      return merge({}, _nullUser);

    case "RECEIVE_ERRORS":
      return merge({}, _nullUser, {action.errors});

    default:
      return state;

  }
};

export default SessionReducer;