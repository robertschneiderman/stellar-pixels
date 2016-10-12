import React from 'react';
import SearchResultPhoto from './search_result_photo';
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

  }

  // componentWillReceiveProps() {

  // }

  // searchResultItems() {
  //   if (this.props.photos) {
  //     return <MyPerfectGrid photos={this.props.photos} />
  //   }
  // }

  _handleWaypointEnter() {
    this.props.requestSearchPhotos(this.props.query, this.props.page);    
  }

  render() {  
    console.log("this.props:", this.props);
    this.photos = this.props.photos.map(photos => {
      return (
        {
          id: photos.id,
          url: photos.url,
          email: photos.email,
          avatar: photos.avatar,
          height: photos.height,
          width: photos.width,
          aspectRatio: (photos.width / photos.height),
        }
      )
    });

      // <Loading loading={this.props.loading} >
    let style = {top: '100px', marginBottom: '100px'}
    return (
        <div className="search-results">
          <GalleryContainer photos={this.photos} disableLightbox={true} />
          <Waypoint
            onEnter={this._handleWaypointEnter}/>
          <section style={style} className="mod model-6">
            <div className="spinner">
            </div>
          </section>     
        </div>
    )
          // <span id="trigger"></span>
  }
}


export default SearchResults