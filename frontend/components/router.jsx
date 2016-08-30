import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';





class AppRouter extends React.Component {

  constructor(props) {
    super(props);

    this._ensuredLoggedIn = this._ensuredLoggedIn.bind(this);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
  }

  _ensureLoggedIn(nextState, replace){
    const currentState = this.context.store.getState();
    const currentUser = currentState.session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  }

  _redirectIfLoggedIn(nextState, replace){
    const currentState = this.context.store.getState();
    const currentUser = currentState.session.currentUser;
    if (currentUser) {
      replace('/');
    }
  }  

}