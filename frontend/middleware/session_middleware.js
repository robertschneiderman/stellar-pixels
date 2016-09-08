import * as API from '../util/session_api_util';
import * as ACTIONS from '../actions/session_actions';
import {router, hashHistory} from 'react-router';


const SessionMiddleware = ({dispatch}) => next => action => {

  const success = user => {
    dispatch(ACTIONS.receiveCurrentUser(user));
    hashHistory.push('/search');
  };

  const error = xhr => dispatch(ACTIONS.receiveErrors(xhr.responseJSON));

  switch (action.type) {
    case "SIGNUP":
    // debugger;
      API.signup(action.user, success, error);
      return next(action);      
      break;
      
    case "LOGIN":
      API.login(action.user, success, error);
      return next(action);
      break;

    case "LOGOUT":
      API.logout(() => next(action));
      hashHistory.push('/');
      break;

    default:
      return next(action);
      break;
  }

}

export default SessionMiddleware;