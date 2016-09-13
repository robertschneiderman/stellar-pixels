// import * as API from '../util/session_api_util';
// import * as ACTIONS from '../actions/session_actions';
import merge from 'lodash/merge';
import router from 'react-router';

// const _nullUser = Object.freeze({
//   currentUser: null,
//   errors: []
// });

const PhotosReducer = (state = {photos: [], image: {}, page: 1}, action) => {
  let newState;
  switch (action.type) {

    case "RECEIVE_SEARCH_ITEMS":
      newState = merge({}, state, {query: action.query, page: (state.page + 1)});
      newState.items = newState.items.concat(action.items);
      return newState;

    case "RECEIVE_NEW_SEARCH":
      newState = merge({}, state, {query: action.query, page: state.page});
      newState.items = action.items;
      return newState;      

    case "RECEIVE_SINGLE_PHOTO":
      newState = merge({}, state);
      newState.photos.forEach((photo, i) => {
        if (photo.id === action.photo.id) {
          newState.photos[i] = action.photo;
        }
      });

      return newState;

    case "RECEIVE_IMAGE_DETAIL":
      // debugger;
      return merge({}, state, {image: action.image});

    case "RECEIVE_FEED_PHOTOS":
      return merge({}, state, {photos: action.photos});          

    default:
      return state;

  }
};

export default PhotosReducer;