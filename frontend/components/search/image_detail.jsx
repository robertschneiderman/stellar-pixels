import React from 'react';
// import Container from './/_container';

class ImageDetail extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      width: this.props.image.width
    };

    let favorites = this.props.currentUser.favorites;
    let imgId = this.props.image.id;

    let favorited = (favorites && favorites[imgId]);

    return(
      <div className="img-detail-container">
        <img className="img-detail-img" src={this.props.image.url} />

        <div className="img-detail-text">

          <div className="author-card">
            <img className="author-card-avatar" src={this.props.image.avatar} style={style} alt=""/>
            <div className="author-card-text">
              <span className="author-card-name">{this.props.image.email}</span>
              <button className="author-card-button">Follow</button>
            </div>
          </div>

          <div className="img-title-container">
            <p className="img-title">{this.props.image.title}</p>
            <FavoriteBtn favorited={favorited} favorite={this.props.favorite.bind(this, this.props.image.id)} />
          </div>
        </div>
      </div>
    )
  }
}


// POST /api/photos/

export default ImageDetail;