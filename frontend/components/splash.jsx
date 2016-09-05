import { requestSearchItems } from '../actions/search_actions';
import React from 'react';
import GalleryContainer from './search/gallery_container';

// import GreetingContainer from './greeting/greeting_container';

  // <SessionFormContainer />

// const items = this.props.state.dispatch(requestSearchItems).map(item => {
//   return (
//     {
//       id: item.id,
//       src: item.url,
//       email: item.email,
//       avatar: item.avatar,
//       height: item.height,
//       width: item.width,
//       aspectRatio: (item.width / item.height),
//     }
//   )
// });

export const splash = ({children}) => (

    <div className="container-splash">
      <header className="header-splash">
        <h1 className="headline-splash">Home to everyones best photos</h1>
        <p className="headline-sub-splash mb25">Showcase your work, license amazing photos, and stay inspired.</p>
        <button className="btn btn-large color-blue">Discover</button>
      </header>

      {children}

    </div>




);

    // <div className="sample-container">

    //   <div className="sample-search">
    //     <input className="sample-search-input" type="text" placeholder="Search Stellar Pixels for pictures" />
    //     <button className="sample-search-btn">Search</button>

    //   </div>
            
    // </div>

export default splash;