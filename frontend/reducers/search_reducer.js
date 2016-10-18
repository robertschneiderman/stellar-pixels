import merge from 'lodash/merge';
import {router, hashHistory} from 'react-router';

const SearchReducer = (state = {photos: [], image: {}, page: 1, query: ''}, action) => {

  switch (action.type) {

    case "RECEIVE_SEARCH_PHOTOS":
      let photos;
      if (state.query !== action.query) {
        photos = action.photos;
      } else {
        photos = state.photos.concat(action.photos);
      }
      return merge({}, state, {photos: photos, page: (action.page + 1), query: action.query});

    default:
      return state;

  }
};

export default SearchReducer;