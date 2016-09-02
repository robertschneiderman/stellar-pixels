import * as API from '../util/search_api_util';
import * as LOADING_ACTIONS from '../actions/loading_actions';
import * as ACTIONS from '../actions/search_actions';


const SearchMiddleware = ({dispatch}) => next => action => {


  const success = items => {
    dispatch(LOADING_ACTIONS.stopLoading('search-items'));
    dispatch(ACTIONS.receiveSearchItems(items));
  };

  const error = xhr => {
    dispatch(LOADING_ACTIONS.stopLoading());
    // dispatch(ACTIONS.receiveErrors(xhr.responseJSON));
  }

  switch (action.type) {
    case "REQUEST_ALL_ITEMS":
      dispatch(LOADING_ACTIONS.startLoading('search-items'));
      API.fetchSearchItems('', success);
      return next(action);      
      break;

    case "REQUEST_SEARCH_ITEMS":
      dispatch(LOADING_ACTIONS.startLoading('search-items'));
      // debugger;
      // console.log("action.query:", action.query);
      API.fetchSearchItems(action.query, success);
      return next(action);      
      break;

    default:
      return next(action);
      break;
  }

}

export default SearchMiddleware;