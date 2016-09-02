import React from 'react';
import SearchBarContainer from './search_bar_container';
import SearchResultsContainer from './search_results_container';
import SearchFilters from './search_filters';

class SearchPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <SearchBarContainer />
        <SearchFilters />
        <SearchResultsContainer onEnter={this.props.onEnter} />
      </div>
    )
  }
}

export default SearchPage;