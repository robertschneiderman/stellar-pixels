// import * as API from '../util/session_api_util';
// import * as ACTIONS from '../actions/session_actions';
import merge from 'lodash/merge';
import router from 'react-router';

// const _nullUser = Object.freeze({
//   currentUser: null,
//   errors: []
// });

const SearchReducer = (state = {items: [], image: {}}, action) => {

  switch (action.type) {

    case "RECEIVE_ALL_ITEMS":
      console.log("action:", action);
      return merge({}, state, {items: action.items});

    case "RECEIVE_SEARCH_ITEMS":
      return merge({}, state, {items: action.items});

    case "RECEIVE_IMAGE_DETAIL":
      // debugger;
      return merge({}, state, {image: action.image});

    default:
      return state;

  }
};

export default SearchReducer;