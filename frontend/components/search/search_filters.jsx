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
    console.log("e:", e);
    this.props.filterSearchItems(e.currentTarget.id);
  }

  render() {
        // <input type="text"/>
        // <input type="text"/>
    return (
      <div className="search-filters-container">
        <div className="btn-ar-container">
          <button id="wide" className="btn-ar ibm" onClick={this.filter.bind(this)}><img className="btn-wide" src="http://res.cloudinary.com/stellar-pixels/image/upload/v1473451377/wide-ar_kbbnw7.svg" alt=""/></button>
          <button id="narrow" className="narrow btn-ar ibm" onClick={this.filter.bind(this)}><img className="btn-narrow" src="http://res.cloudinary.com/stellar-pixels/image/upload/v1473451377/narrow-ar_t3pt11.svg" alt=""/></button>
          <button id="square" className="square btn-ar ibm" onClick={this.filter.bind(this)}><img className="btn-square" src="http://res.cloudinary.com/stellar-pixels/image/upload/v1473451377/sqaure-ar_f2skur.svg" alt=""/></button>
        </div>

      </div>
    )
        // <div className="btn-flushed-container">
        //   <button id="center" onClick={this.filter}><img className="btn-ar" src="/assets/svg/center-flushed.svg" alt=""/></button>
        //   <button id="sides" onClick={this.filter}><img className="btn-ar" src="/assets/svg/sides-flushed.svg" alt=""/></button>
        // </div>

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