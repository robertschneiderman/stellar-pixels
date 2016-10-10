import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import SplashContainer from './splash_container';
import SessionFormContainer from './session_form/session_form_container';
import SearchPageContainer from './search/search_page_container';
import ImageDetailModal from './search/image_detail_modal';
import ProfilePageContainer from './users/profile_page_container';
import FeedPageContainer from './search/feed_page_container';
import { requestUser } from '../actions/users_actions';


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

  requestUser(nextState) {
    console.log("this.props.store:", this.props.store);
    console.log("nextState.params.id:", nextState.params.id);
    this.props.store.dispatch(requestUser(nextState.params.id));
  }


          // <Route path="/sign-up" component={SessionFormContainer} onEnter={this._redirectIfLoggedIn}>
          // </Route>
          // <Route path="/login" component={SessionFormContainer} onEnter={this._redirectIfLoggedIn}>
          // </Route>
  
  render() {    
     // onEnter={this._ensureLoggedIn.bind(this)}
    return(
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SplashContainer} />

          <Route path="/feed" component={FeedPageContainer}>

          </Route>          

          <Route path="/search" component={SearchPageContainer}>
            <Route path="images/:id" component={ImageDetailModal}>

            </Route>
          </Route>

          <Route path="/users/:id" component={ProfilePageContainer} onEnter={this.requestUser.bind(this)}>

          </Route>

        </Route>
      </Router>
    )
  }
          // <Route path="/users/:id" component={ProfilePageContainer}>

          // </Route>
}

export default AppRouter;