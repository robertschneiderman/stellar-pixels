import { applyMiddleware } from 'redux';
import SessionMiddleware from '../middleware/session_middleware';
import SearchMiddleware from '../middleware/search_middleware';
import UsersMiddleware from '../middleware/users_middleware';
import PhotosMiddleware from '../middleware/photos_middleware';
import logger from 'redux-logger';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  UsersMiddleware,
  PhotosMiddleware,
  SearchMiddleware,
  logger()
);

export default RootMiddleware;
