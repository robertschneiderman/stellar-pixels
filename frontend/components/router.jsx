import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import Splash from './splash';
import SessionFormContainer from './session_form/session_form_container';
import SearchPageContainer from './search/search_page_container';


class AppRouter extends React.Component {

  constructor(props) {
    super(props);
  
    this._ensuredLoggedIn = this._ensureLoggedIn.bind(this);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
  }

  _ensureLoggedIn(nextState, replace){
    const currentState = this.props.store.getState();
    const currentUser = currentState.session.currentUser;
    if (!currentUser) {
      replace('/');
    }
  }

  _redirectIfLoggedIn(nextState, replace){
    const currentState = this.props.store.getState();
    const currentUser = currentState.session.currentUser;
    if (currentUser) {
      replace('/feed');
    }
  }

          // <Route path="/sign-up" component={SessionFormContainer} onEnter={this._redirectIfLoggedIn}>
          // </Route>
          // <Route path="/login" component={SessionFormContainer} onEnter={this._redirectIfLoggedIn}>
          // </Route>
  
  render() {
    return(
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Splash} />
          <Route path="/search" component={SearchPageContainer} onEnter={this._ensureLoggedIn.bind(this)}>
          </Route>
          <Route path="/photos" component={SessionFormContainer} onEnter={this._redirectIfLoggedIn}>
          </Route>          
        </Route>
      </Router>
    )
  }
}

export default AppRouter;