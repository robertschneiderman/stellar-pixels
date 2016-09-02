import { applyMiddleware } from 'redux';
import SessionMiddleware from '../middleware/session_middleware';
import SearchMiddleware from '../middleware/search_middleware';
import logger from 'redux-logger';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  SearchMiddleware,
  logger()
);

export default RootMiddleware;
