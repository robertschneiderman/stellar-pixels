import * as API from '../util/users_api_util';
import * as ACTIONS from '../actions/users_actions';
import { receiveCurrentUser } from '../actions/session_actions';
import {router, hashHistory} from 'react-router';

const userMiddleware = store => next => action => {

  let dispatch = store.dispatch;

  const successUser = user => {
    dispatch(ACTIONS.receiveUser(user));
  };   

  const successFollow = user => {
    dispatch(receiveCurrentUser(user));
  };

  switch (action.type) {

    case "REQUEST_USER":
      API.fetchUser(action.user_id, successUser);
      return next(action);      
      break;    

    case "FOLLOW":
      API.follow(action.broadcaster_id, successFollow);
      return next(action);      
      break;    

    default:

      return next(action);
      break;

  }

}

export default userMiddleware;