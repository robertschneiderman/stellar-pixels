import React from 'react';
import SearchBarContainer from './search_bar_container';
import SearchResultsContainer from './search_results_container';
import SearchFiltersContainer from './search_filters_container';
import SearchFilters from './search_filters';
import Loading from './loading';
import { StickyContainer, Sticky } from 'react-sticky';

class SearchPage extends React.Component {

  componentDidMount() {
    this.props.loadPage();
  }  

  render() {
    return(
      <Loading loading={this.props.loading}>
        <StickyContainer>
          <div className="load-fade-in">
            <Sticky>      
              <SearchBarContainer />
            </Sticky>
            <SearchFiltersContainer />
            <SearchResultsContainer />
          </div>
        </StickyContainer>
            {this.props.children}
      </Loading>
    )
  }
}

export default SearchPage;