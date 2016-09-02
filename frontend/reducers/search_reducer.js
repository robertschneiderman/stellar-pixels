// import * as API from '../util/session_api_util';
// import * as ACTIONS from '../actions/session_actions';
import merge from 'lodash/merge';
import router from 'react-router';

// const _nullUser = Object.freeze({
//   currentUser: null,
//   errors: []
// });

const SearchReducer = (state = [], action) => {

  switch (action.type) {

    case "RECEIVE_ALL_ITEMS":
      // router.push('/feed');
      console.log("action:", action);
      return action.items;

     case "RECEIVE_SEARCH_ITEMS":
      // router.push('/feed');
      return action.items;

    default:
      return state;

  }
};

export default SearchReducer;