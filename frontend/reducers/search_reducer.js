// import * as API from '../util/session_api_util';
// import * as ACTIONS from '../actions/session_actions';
import merge from 'lodash/merge';
import router from 'react-router';

// const _nullUser = Object.freeze({
//   currentUser: null,
//   errors: []
// });

const SearchReducer = (state = {items: [], image: {}, page: 1}, action) => {

  switch (action.type) {

    case "RECEIVE_SEARCH_ITEMS":

      let newState = merge({}, state, {query: action.query, page: state.page + 1});
      newState.items = newState.items.concat(action.items);
      return newState;

    case "RECEIVE_IMAGE_DETAIL":
      // debugger;
      return merge({}, state, {image: action.image});

    case "RECEIVE_USER":
      return merge({}, state, {user: action.user});      

    case "RECEIVE_FEED_ITEMS":
      return merge({}, state, {items: action.items});      

    default:
      return state;

  }
};

export default SearchReducer;