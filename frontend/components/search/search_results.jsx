import React from 'react';
import SearchResultItem from './search_result_item';
import Loading from './loading';
import MyPerfectGrid from './perfect_grid';
// import Gallery from './react_masonry';
// import Gallery from './react_photo_gallery';
import GalleryContainer from './gallery_container';
import LazyLoad from 'react-lazy-load';
import Waypoint from 'react-waypoint';

// import InfiniteScroll from 'react-lazy-load';


class SearchResults extends React.Component {

  constructor(props) {
    super(props);
    this.displayName = '';
    this._handleWaypointEnter = this._handleWaypointEnter.bind(this);
  }

  componentDidMount() { 
    // this.props.requestSearchItems('', 1);
  }

  // componentWillReceiveProps() {

  // }

  // searchResultItems() {
  //   if (this.props.items) {
  //     return <MyPerfectGrid items={this.props.items} />
  //   }
  // }

  _handleWaypointEnter() {
    this.props.requestSearchItems('', this.props.page);    
  }

  render() {  
    this.items = this.props.items.map(item => {
      return (
        {
          id: item.id,
          url: item.url,
          email: item.email,
          avatar: item.avatar,
          height: item.height,
          width: item.width,
          aspectRatio: (item.width / item.height),
        }
      )
    });


    return (
      <Loading loading={this.props.loading} >
        <div className="search-results">
          <GalleryContainer photos={this.items} disableLightbox={true} />
          <Waypoint
            onEnter={this._handleWaypointEnter}
          />          
        </div>
      </Loading>
    )
          // <span id="trigger"></span>
  }
}


export default SearchResults