import * as API from '../util/search_api_util';
import * as LOADING_ACTIONS from '../actions/loading_actions';
import * as ACTIONS from '../actions/search_actions';
import { receiveCurrentUser } from '../actions/session_actions';
import {router, hashHistory} from 'react-router';



const SearchMiddleware = store => next => action => {
  let dispatch = store.dispatch;

  const successSearch = (query, page) => {
    // debugger
    return (items) => {
      dispatch(ACTIONS.receiveSearchItems(items, query, page));
      dispatch(LOADING_ACTIONS.stopLoading('search-items'));
    };
  };

  const successNewSearch = (query, page) => {
    // debugger
    return (items) => {
      dispatch(ACTIONS.receiveNewSearch(items, query, page));
      dispatch(LOADING_ACTIONS.stopLoading('search-items'));
    };
  };  

  const successFind = image => {
    dispatch(LOADING_ACTIONS.stopLoading('image-detail'));
    dispatch(ACTIONS.receiveImageDetail(image));
  };

  const successCreate = image => {
    dispatch(ACTIONS.receiveSingleImage(image));
  };   

  const successUserId = user => {
    setTimeout( () => {
      dispatch(ACTIONS.receiveUser(user));
      dispatch(LOADING_ACTIONS.stopLoading('user'));    
    }, 1000);
  };      

  const successFeed = items => {
    dispatch(LOADING_ACTIONS.stopLoading('feed'));    
    dispatch(ACTIONS.receiveFeedItems(items));
  };

  const successFollow = user => {
    dispatch(receiveCurrentUser(user));
  };      

  const successFavorite = user => {
    dispatch(receiveCurrentUser(user));
  };   

  const successFavoriteFeed = user_id => photo => {
    dispatch(ACTIONS.addFavoriteToPicture(photo.id, user_id));
  };   

  const error = xhr => {
    dispatch(LOADING_ACTIONS.stopLoading());
    // dispatch(ACTIONS.receiveErrors(xhr.responseJSON));
  };

  // const loadPage = user => {
  //   setTimeout( () => {
  //     dispatch(ACTIONS.receiveUser(user));
  //     dispatch(LOADING_ACTIONS.stopLoading('user'));    
  //   }, 1000);
  // };    

  switch (action.type) {
    case "REQUEST_SEARCH_ITEMS":
      dispatch(LOADING_ACTIONS.startLoading('search-items'));
      // API.fetchSearchItems(action.query, store.getState().search.page, successSearch);

      API.fetchSearchItems(action.query, store.getState().search.page, successSearch);
      return next(action);      
      break;

    case "MAKE_NEW_SEARCH":
      dispatch(LOADING_ACTIONS.startLoading('search-items'));
      API.fetchSearchItems(action.query, action.page, successNewSearch);
      return next(action);      
      break;      

    case "FILTER_SEARCH_ITEMS":
      dispatch(LOADING_ACTIONS.startLoading('search-items'));
      API.filterSearchItems(action.query, action.page, successSearch);
      return next(action);      
      break;      

    case "REQUEST_IMAGE_DETAIL":
      dispatch(LOADING_ACTIONS.startLoading('image-detail'));
      API.fetchImageDetail(action.image, successFind);
      return next(action);      
      break;

    case "REQUEST_USER_PHOTOS":
      dispatch(LOADING_ACTIONS.startLoading('user'));
      API.fetchUser(action.user_id, successUserId);
      return next(action);      
      break;      

    case "UPLOAD_PHOTO":
      API.createPhoto(action.image, successCreate);
      return next(action);      
      break; 

    case "REQUEST_FEED_ITEMS":
      dispatch(LOADING_ACTIONS.startLoading('feed'));      
      API.fetchFeed(successFeed);
      return next(action);      
      break; 

    case "FOLLOW":
      API.follow(action.broadcaster_id, successFollow);
      return next(action);      
      break;

    case "FAVORITE":
      API.favorite(action.photo_id, successFavorite);
      return next(action);      
      break;

    case "FAVORITE_FEED":
      let user_id = store.getState().session.currentUser.id;
      API.favorite(action.photo_id, successFavoriteFeed(user_id));
      return next(action);      
      break;      

    case "LOAD_PAGE":
      dispatch(LOADING_ACTIONS.startLoading('load-page'));
      setTimeout( () => {
        dispatch(LOADING_ACTIONS.stopLoading('load-page'));    
      }, 1000);        
      return next(action);      
      break;                     

    default:
      return next(action);
      break;
  }

}

export default SearchMiddleware;