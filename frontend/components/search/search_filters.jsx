import React from 'react';

// import Gallery from './react_masonry';
// import Gallery from './react_photo_gallery';

class SearchFilters extends React.Component {

  constructor(props) {
    super(props);
    this.displayName = '';
  }

  filter(e) {
    e.preventDefault();
    this.props.requestSearchItems(e.currentTarget.id);
  }

  render() {
        // <input type="text"/>
        // <input type="text"/>
    return (
      <div className="search-filters-container">
        <div className="btn-ar-container">
          <button id="wide" onClick={this.filter}><img className="btn-ar" src="/assets/svg/wide-ar.svg" alt=""/></button>
          <button id="narrow" onClick={this.filter}><img className="btn-ar" src="/assets/svg/narrow-ar.svg" alt=""/></button>
          <button id="square" onClick={this.filter}><img className="btn-ar" src="/assets/svg/square-ar.svg" alt=""/></button>
        </div>

        <div className="btn-flushed-container">
          <button id="center" onClick={this.filter}><img className="btn-ar" src="/assets/svg/center-flushed.svg" alt=""/></button>
          <button id="sides" onClick={this.filter}><img className="btn-ar" src="/assets/svg/sides-flushed.svg" alt=""/></button>
        </div>
      </div>
    )

    // <div className="radio-buttons">
    //   <input type="radio" name="emotion" id="sad" className="input-hidden" />
    //   <label for="sad"><img src="/assets/rectangle-ar.png" /></label>

    //   <input type="radio" name="emotion" id="happy" />
    //   <label for="happy"><img src="/assets/inv-rectangle-ar.png" alt="I'm happy" /></label>

    //   <input type="radio" name="emotion" id="happy" />
    //   <label for="happy"><img src="happy_image.png" alt="I'm happy" /></label>          
    // </div>    
  }
}


export default SearchFilters