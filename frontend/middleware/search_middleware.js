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
      API.fetchSearchItems(action.query, store.getState().search.page, successSearch);
      return next(action);      
      break;    

    case "FILTER_SEARCH_ITEMS":
      dispatch(LOADING_ACTIONS.startLoading('search-items'));
      API.filterSearchItems(action.query, action.page, successSearch);
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