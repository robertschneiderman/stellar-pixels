import React from 'react';
// import Container from './/_container';

class ImageResult extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    // this.props.requestImageDetail.bind(this, this.props.photos[k].id
    return (
      <div className="img-container" key={k} onClick={() => hashHistory.push(`/search/images/${image.id}`)} key={k} style={style}>
        <img src={src} style={{display:'block', border:0}} height={commonHeight} width={commonHeight * image.aspectRatio} alt="" />
        <div className="img-footer fbc">
          <div className="ibm">
            <img className="avatar-img ibm" src={image.avatar} alt=""/>
            <span className="avatar-title white ibm">{image.email}</span>
          </div>
          <svg className="icon-heart ibm" version="1.1" viewBox="-6.9 -13.1 40 40" x="0px" y="0px">
              <path className="shape" d="M20.7-7.2c-5.8,0-7.6,4.3-7.6,4.3l0,0c0,0-1.8-4.3-7.6-4.3s-8.4,3.7-8.4,8.1c0,2.2,1.8,5.2,3.6,7.3
C2.5,10.3,13.1,20.6,13.1,21l0,0c0-0.4,10.6-10.7,12.4-12.7c1.8-2,3.6-5,3.6-7.3C29.1-3.4,26.4-7.2,20.7-7.2z" fill="#FFFFFF"></path>
          </svg>
        </div>
      </div>
    )
  }
}

export default ImageResult;