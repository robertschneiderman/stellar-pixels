import React from 'react';

class SearchResultItem extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <img src={this.props.src} />
      </div>
    )
  }


}


export default SearchResultItem;