import React from 'react';
import GalleryContainer from '../search/gallery_container';
import LazyLoad from 'react-lazy-load';
import Loading from '../search/loading';
import FollowBtn from '../users/follow_btn';
import { photosArray } from '../../reducers/selectors';
// import Container from './/_container';

class ProfilePage extends React.Component {

  constructor(props) {
    super(props);
    this.user = {};
    this.user.photos = [];
  }

  componentDidMount() {
    debugger;
    this.props.requestUser(this.props.params.id);    
    // this.props.requestProfilePhotos(this.props.params.id);    
  }

  componentWillReceiveProps(newProps) {
    this.setState(this.getState(newProps));
   }
 
  getState(props) {
    props = props || this.props;
    return {
      user: props.requestUser(props.params.id)
    };
  } 

  // componentDidUpdate() {
  //   const heroImg = $('#hero-img');
  //   if (heroImg) {
  //     $(window).scroll(() => {
  //       heroImg.animate({'background-postion': '+=30px 0'}, 100);
  //     });
  //   }     
  // }

  formatPhotos() {
    let photos = photosArray(this.props.user.photos);

    if (photos) {
      photos.slice(1).forEach(photo => {
        photo.aspectRatio = (photo.width / photo.height)
      }); 
    }

    this.photos = photos;
  }

  setPhotos() {
    this.count = this.photos.length;

    if (this.count === 0) {
      this.photos.push({ url: "http://res.cloudinary.com/stellar-pixels/image/upload/v1473360272/placeholder-bg_rn2wco.jpg"});
    } 

    this.gallery = (this.count > 0) ? <GalleryContainer photos={this.photos} disableLightbox={true} /> : <span></span>
  }

  attributeCount(attribute_name) {
    let count = 0;
    let attribute = this.props.user[attribute_name];
    for (let k in attribute) {
      if (attribute.hasOwnProperty(k)) {
         ++count;
      }
    }
    return count;
  } 

  render() {
    debugger;
    let code;

    this.formatPhotos();
    this.setPhotos();

    if (this.props.user) {
    
      const style = {
        backgroundImage: 'url(' + this.photos[0].url + ')',
        backgroundPosition: 0
      };      

      code = <div className="profile-intro">

        <div className="profile-hero" id="hero-img" style={style}>
          <FollowBtn user={this.props.user} currentUser={this.props.currentUser} follow={this.props.follow} />
        </div>

        <div className="profile-info">
          <img className="profile-avatar" src={this.props.user.avatar} alt=""/>
          <p className="profile-title">{this.props.user.email}</p>
          <ul className="profile-stats fbc">
            <li className="profile-stat">
              {this.count} Photos
            </li>
            <li className="profile-stat">
              {this.attributeCount('favorites')} Favorites
            </li>
            <li className="profile-stat">
              {this.attributeCount('broadcasters')} Follows
            </li>
            <li className="profile-stat">
              {this.attributeCount('followers')} Followers
            </li>
          </ul>
        </div>
      </div>
    }

    return (
      <Loading loading={this.props.loading}>
        <div className="profile load-fade-in">     
          {code}
          {this.gallery}
        </div>
      </Loading>
    )
  }
}

export default ProfilePage;