import React from 'react';
import SearchResultItem from './search_result_item';
import Loading from './loading';
import MyPerfectGrid from './perfect_grid';
// import Gallery from './react_masonry';
// import Gallery from './react_photo_gallery';
import Gallery from './Gallery';
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
          src: item.url,
          height: item.height,
          width: item.width,
          aspectRatio: (item.width / item.height),
        }
      )
    });


    return (
      <Loading loading={this.props.loading} >
        <div className="search-results">
          <LazyLoad height={762} offsetVertical={300}>
            <Gallery photos={this.items} disableLightbox={true}>
              <h1>worked?</h1>
            </Gallery>
          </LazyLoad>
        </div>
      </Loading>
    )
  }
}


export default SearchResults