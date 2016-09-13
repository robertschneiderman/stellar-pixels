import * as API from '../util/photos_api_util';
import * as ACTIONS from '../actions/photos_actions';
import * as LOADING_ACTIONS from '../actions/loading_actions';
import {router, hashHistory} from 'react-router';

const photosMiddleware = store => next => action => {

  let dispatch = store.dispatch;

  const successFeedPhotos = photos => {
    dispatch(LOADING_ACTIONS.stopLoading('feed'));    
    dispatch(ACTIONS.receiveFeedPhotos(photos));
    // debugger;
  };  

  const successProfilePhotos = user => {
    setTimeout( () => {
      dispatch(ACTIONS.receiveProfilePhotos(user));
      dispatch(LOADING_ACTIONS.stopLoading('user'));    
    }, 1000);
  };  

  const successPhotoDetail = photo => {
    dispatch(LOADING_ACTIONS.stopLoading('photo-detail'));
    dispatch(ACTIONS.receivePhotoDetail(photo));
  };

  const successUpload = photo => {
    dispatch(ACTIONS.receiveSinglePhoto(photo));
  };         

  const successFavorite = photo => {
    dispatch(ACTIONS.receiveSinglePhoto(photo));
  };   

  switch (action.type) {

    case "REQUEST_FEED_PHOTOS":
      dispatch(LOADING_ACTIONS.startLoading('user'));
      API.fetchFeedPhotos(successFeedPhotos);
      return next(action);      
      break;    

    case "REQUEST_PROFILE_PHOTOS":
      dispatch(LOADING_ACTIONS.startLoading('user'));
      API.fetchProfilePhotos(action.user_id, successProfilePhotos);
      return next(action);      
      break;

    case "REQUEST_PHOTO_DETAIL":
      dispatch(LOADING_ACTIONS.startLoading('photo-detail'));
      API.fetchPhotoDetail(action.photo, successPhotoDetail);
      return next(action);      
      break;      

    case "UPLOAD_PHOTO":
      API.uploadPhoto(action.photo, successUpload);
      return next(action);      
      break;       

    case "FAVORITE":
      API.favorite(action.photo_id, successFavorite);
      return next(action);      
      break;   

    default:
      return next(action);
      break;
  }
};

export default photosMiddleware;      