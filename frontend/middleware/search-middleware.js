import * as API from '../util/search_api_util';
import * as ACTIONS from '../actions/search_actions';


const SearchMiddleware = ({dispatch}) => next => action => {

  const success = items => (
    dispatch(ACTIONS.receiveSearchItems(items))
    // hashHistory
  );

  const error = xhr => dispatch(ACTIONS.receiveErrors(xhr.responseJSON));

  switch (action.type) {
    case "REQUEST_SEARCH_ITEMS":
      API.fetchSearchItems(success, error);
      return next(action);      
      break;

    default:
      return next(action);
      break;
  }

}

export default SearchMiddleware;