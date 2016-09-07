import { requestSearchItems } from '../actions/search_actions';
import React from 'react';
import GalleryContainer from './search/gallery_container';
import SearchResultsContainer from './search/search_results_container';
import { hashHistory } from 'react-router';


class Splash extends React.Component {

  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger;
    hashHistory.push('/search');
    this.props.requestSearchItems(e.currentTarget.value, 1);
  }

  render() {

    return(

      <div className="splash-page">
        <div className="container-splash">
          <header className="header-splash">
            <h1 className="headline-splash">Home to everyones best photos</h1>
            <p className="headline-sub-splash mb25">Showcase your work, license amazing photos, and stay inspired.</p>
            <button className="btn btn-large color-blue">Discover</button>
          </header>
        
          {this.props.children}  
        </div>
        
        <div className="sample-container">
        
          <h2 className="sample-search-title">A photography community unlike any other</h2>

          <form onSubmit={this.handleSubmit.bind(this)} className="sample-search">
            <input className="sample-search-input" type="text" placeholder="Search Stellar Pixels for pictures" />
            <button className="sample-search-btn">Search</button>
          </form>
        
          <SearchResultsContainer />
                
        </div>
      </div>
    )

  }
}

export default Splash;