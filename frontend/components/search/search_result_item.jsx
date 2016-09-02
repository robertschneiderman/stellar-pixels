import React from 'react';

class SearchResultItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
        console.log("this.props.src:", this.props.src);
        // console.log("this.props.src.display_sizes[0]:", this.props.src.display_sizes[0].uri);
    return (
      <div>
        <img src={`https://api.gettyimages.com/v3/images/${this.props.src.display_sizes[0].uri}`} />
      </div>
    )
  }


}


export default SearchResultItem;