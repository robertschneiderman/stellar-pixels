import React from 'react';
import SearchResultItem from './search_result_item';
import Loading from './loading';
import MyPerfectGrid from './perfect_grid';
// import Gallery from './react_masonry';
import Gallery from './react_photo_gallery';

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
    return (
      <Loading loading={this.props.loading} >
        <div className="search-results">
          <Gallery items={this.props.items} />
        </div>
      </Loading>
    )
  }
}


export default SearchResults