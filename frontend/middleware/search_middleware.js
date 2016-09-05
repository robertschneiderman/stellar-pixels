import * as API from '../util/search_api_util';
import * as LOADING_ACTIONS from '../actions/loading_actions';
import * as ACTIONS from '../actions/search_actions';


const SearchMiddleware = ({dispatch}) => next => action => {


  const successSearch = items => {
    dispatch(LOADING_ACTIONS.stopLoading('search-items'));
    dispatch(ACTIONS.receiveSearchItems(items));
  };

  const successFind = image => {
    dispatch(LOADING_ACTIONS.stopLoading('image-detail'));
    dispatch(ACTIONS.receiveImageDetail(image));
  };  

  const error = xhr => {
    dispatch(LOADING_ACTIONS.stopLoading());
    // dispatch(ACTIONS.receiveErrors(xhr.responseJSON));
  }

  switch (action.type) {
    case "REQUEST_ALL_ITEMS":
      dispatch(LOADING_ACTIONS.startLoading('search-items'));
      API.fetchSearchItems('', successSearch);
      return next(action);      
      break;

    case "REQUEST_SEARCH_ITEMS":
      dispatch(LOADING_ACTIONS.startLoading('search-items'));
      API.fetchSearchItems(action.query, successSearch);
      return next(action);      
      break;

    case "REQUEST_IMAGE_DETAIL":
      dispatch(LOADING_ACTIONS.startLoading('image-detail'));
      API.fetchImageDetail(action.image, successFind);
      return next(action);      
      break;      

    default:
      return next(action);
      break;
  }

}

export default SearchMiddleware;