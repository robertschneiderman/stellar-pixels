import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import LoadingReducer from './loading_reducer';
import SearchReducer from './search_reducer';

export default combineReducers({
  session: SessionReducer,
  loading: LoadingReducer,
  search: SearchReducer
});