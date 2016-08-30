import * as API from '../util/session_api_util';
import * as ACTIONS from '../actions/session_actions';


const SessionMiddleware = ({dispatch}) => next => action => {

  const success = user => dispatch(ACTION.receiveCurrentUser);

  const error = errors => dispatch(ACTION.receiveErrors);

  switch (action.type) {

    case "SIGN_UP":
      API.signup(action.user, success, error);

    case "LOG_IN":
      API.login(action.user, success, error);
      return next(action);
      break;

    case "LOG_OUT":
      API.logout(() => next(action))
      break;

    default:
      return next(action);
      break;
  }

}

export default SessionMiddleware;