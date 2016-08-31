import { applyMiddleware } from 'redux';
import SessionMiddleware from '../middleware/session_middleware';
import logger from 'redux-logger';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  logger()
);

export default RootMiddleware;
