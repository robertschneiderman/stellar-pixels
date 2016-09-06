import React from 'react';
// import Container from './/_container';

class ImageResult extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    // this.props.requestImageDetail.bind(this, this.props.photos[k].id
    return (
      <div className="img-container">
        <img src={this.props.img.src} style={{display:'block', border:0}} height={this.props.commonHeight} width={this.props.commonHeight * this.props.img.aspectRatio} alt="" />
        <div className="img-footer fbc">
          <div className="ibm">
            <img className="avatar-img ibm" src={this.props.img.avatar} alt=""/>
            <span className="avatar-title white ibm">{this.props.img.email}</span>
          </div>
          <div className="ibm">
            <img className="icon-heart" src="/assets/svg/heart.svg" alt=""/>
          </div>
        </div>
      </div>
    )
  }
}

export default ImageResult;