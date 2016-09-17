import merge from 'lodash/merge';
import {router, hashHistory} from 'react-router';

const SearchReducer = (state = {photos: [], image: {}, page: 1}, action) => {

  switch (action.type) {

    case "RECEIVE_SEARCH_PHOTOS":
      debugger;
      return merge({}, state, {photos: action.photos});

    default:
      return state;

  }
};

export default SearchReducer;