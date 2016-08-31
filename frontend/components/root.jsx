import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './router';


const Root = ({ store }) => (
  <Provider store={store}>
    <AppRouter store={store}/>
  </Provider>
);

export default Root;


// rails controller feed. returns photos in most recent order.

// photo model (url, tags, user_id)

// route feed

// FeedIndexContainer
// FeedIndex
// FeedIndexItem (check pokedex)
//will need nested route for item later

