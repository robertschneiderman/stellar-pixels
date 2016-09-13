import merge from 'lodash/merge';
import {router, hashHistory} from 'react-router';

const UsersReducer = (state = {}, action) => {

  switch (action.type) {

    case "RECEIVE_USER":


      state = action.user;
      
      return state;

    // case "RECEIVE_USER":

    //   newState = merge({}, state);
    //   newState.user = action.user;
    //   return newState;      

    default:
      return state;
  }
};

export default UsersReducer;