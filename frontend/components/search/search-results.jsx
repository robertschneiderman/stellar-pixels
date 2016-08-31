import React from 'react';
import SearchResultItem from './search-result-item';

class SearchResults extends React.Component {

  constructor(props) {
      super(props);
      this.displayName = '';
  }

  searchResultItems() {
    console.log("this.props:", this.props);
    return this.props.items.map(item => {
      return <SearchResultItem src="http://imgur.com/gallery/G624q" />
    });
  }

  render() {
      return (
        <div>
          {this.searchResultItems()}
        </div>
      )
  }
}



export default SearchResults