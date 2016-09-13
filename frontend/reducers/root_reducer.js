import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import LoadingReducer from './loading_reducer';
import PhotosReducer from './photos_reducer';
import UsersReducer from './users_reducer';

export default combineReducers({
  session: SessionReducer,
  loading: LoadingReducer,
  user: UsersReducer,
  photos: PhotosReducer
});