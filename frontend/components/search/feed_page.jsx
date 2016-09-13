import React from 'react';
import { hashHistory } from 'react-router';
// import Container from './/_container';
import HeartIcon from './heart_icon';
import Loading from '../search/loading';


class FeedPage extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadPage();  
    this.props.requestFeedPhotos();        
  }

  render() {
    this.photos = this.props.photos.map((photo, i) => {
      let userProfile = `/users/${photo.user_id}`;

      let favoriteCount = 0;
      let favorited = false;
      for (let k in photo.favorites) {
          if (photo.favorites.hasOwnProperty(k)) {
             ++favoriteCount;
          }

          if (photo.favorites[k].user_id === this.props.currentUser.id) {
            favorited = true;
          }
      }       

      // let favorites = this.props.currentUser.favorites;
      let photoId = photo.id;

      // let favorited = (favorites && favorites[photoId]) ? true : false;

      let btnClass = favorited ? "btn-favorites hearted" : "btn-favorites";
      
      return (
        <li className="feed-img-container" key={i}>
          <div className="ibm mb3">
            <img src={photo.url} />
            <div className="feed-card">
              <a className="feed-avatar-container" onClick={() => {hashHistory.push(userProfile)} }>
                <img className="feed-avatar" src={photo.avatar} alt=""/>
                <span className="feed-author-title">{photo.email}</span>
              </a>
              <button className={btnClass} onClick={this.props.favorite.bind(this, photoId)}>
                <HeartIcon favorited={favorited} favorite={this.props.favorite.bind(this, photoId)} />
                <span className="title-favorites">{favoriteCount}</span>
              </button>
            </div>
          </div>
        </li>
      )
    });

    return (
      <Loading loading={this.props.loading}>

        <div className="feed-container load-fade-in">
          <ul className="feed">
          
            {this.photos}
          
          </ul>
        </div>
      </Loading>

    )
  }
}

export default FeedPage;