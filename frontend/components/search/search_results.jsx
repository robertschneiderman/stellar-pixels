import React from 'react';
import SearchResultItem from './search_result_item';
import Loading from './loading';
import MyPerfectGrid from './perfect_grid';
// import Gallery from './react_masonry';
// import Gallery from './react_photo_gallery';
import GalleryContainer from './gallery_container';
import LazyLoad from 'react-lazy-load';


class SearchResults extends React.Component {

  constructor(props) {
    super(props);
    this.displayName = '';
  }

  componentWillMount() {
    this.props.requestSearchItems();
  }

  // searchResultItems() {
  //   if (this.props.items) {
  //     return <MyPerfectGrid items={this.props.items} />
  //   }
  // }

  render() {  
    this.items = this.props.items.map(item => {
      return (
        {
          id: item.id,
          src: item.url,
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
        </div>
      </Loading>
    )
  }
}


export default SearchResults