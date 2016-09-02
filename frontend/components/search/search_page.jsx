import React from 'react';
import SearchBarContainer from './search_bar_container';
import SearchResultsContainer from './search_results_container';
import SearchFiltersContainer from './search_filters_container';
import SearchFilters from './search_filters';

class SearchPage extends React.Component {

  render() {
    return(
      <div>
        <SearchBarContainer />
        <SearchFiltersContainer />
        <SearchResultsContainer />
      </div>
    )
  }
}

export default SearchPage;