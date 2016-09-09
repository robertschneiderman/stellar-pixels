import React from 'react';
import GalleryContainer from '../search/gallery_container';
import LazyLoad from 'react-lazy-load';
import Loading from '../search/loading';
import FollowBtn from '../search/follow_btn';
// import Container from './/_container';

class ProfilePage extends React.Component {

  constructor(props) {
    super(props);
    this.user = {};
    this.user.photos = [];
    // console.log("this.props.params.id:", this.props.params.id);
  }

  componentDidMount() {
    this.props.requestUserPhotos(this.props.params.id);
    // debugger;     
  }

  componentDidUpdate() {
    const heroImg = $('#hero-img');
    if (heroImg) {
      console.log("heroImg:", heroImg);
      $(window).scroll(() => {
        heroImg.animate({'background-postion': '+=30px 0'}, 100);        
        // let styles = {
        //   backgroundImage : 'url(' + this.photos[1].url + ')',
        // };
        // $('#hero-img').css(styles);
      });
    }     
  }

  render() {
    // debugger;
    // this.items = this.user.photos;


    let style = {};
    let code;
    let gallery;

    if (this.props.user) {
          // debugger

      this.photos = [];
      for (let id in this.props.user.photos) {
        if (id) {
          let photo = this.props.user.photos[id];
          this.photos.push(photo);
        }
      }

      const count = this.photos.length;

      if (count === 0) {
        this.photos.push({ url: "http://res.cloudinary.com/stellar-pixels/image/upload/v1473360272/placeholder-bg_rn2wco.jpg"});
      }

      const style = {
        backgroundImage: 'url(' + this.photos[0].url + ')',
        backgroundPosition: 0
      }

      this.photos = this.photos.slice(1).map(item => {
        return (
          {
            id: item.id,
            url: item.url,
            email: item.email,
            avatar: item.avatar,
            height: item.height,
            width: item.width,
            aspectRatio: (item.width / item.height),
          }
        )
      });

      if (count > 0) {
        gallery = <GalleryContainer photos={this.photos} disableLightbox={true} />        
      }

      console.log("this.props:", this.props);
      console.log("userId:", userId);

      let userId = this.props.user.id
      let broadcasters = this.props.currentUser.broadcasters;

      console.log("broadcasters:", broadcasters);
      console.log("userId:", userId);

      let followed = (broadcasters && (broadcasters[userId])) ? true : false;

      let followBtn = (userId !== this.props.currentUser.id) ? <FollowBtn followed={followed} follow={this.props.follow.bind(this, this.props.params.id)} /> : ''

      let favoriteCount = 0;
      for (let k in this.props.currentUser.favorites) {
          if (this.props.currentUser.favorites.hasOwnProperty(k)) {
             ++favoriteCount;
          }
      }  

      let broadcasterCount = 0;
      for (let k in this.props.currentUser.broadcasters) {
          if (this.props.currentUser.broadcasters.hasOwnProperty(k)) {
             ++broadcasterCount;
          }
      }    

      let followerCount = 0;
      for (let k in this.props.currentUser.followers) {
          if (this.props.currentUser.followers.hasOwnProperty(k)) {
             ++followerCount;
          }
      }          

      console.log("this.props.user:", this.props.user);    

      code = <div className="profile-intro">
        <div className="profile-hero" id="hero-img" style={style}>
          {followBtn}
        </div>
        <div className="profile-info">
          <img className="profile-avatar" src={this.props.user.avatar} alt=""/>
          <p className="profile-title">{this.props.user.email}</p>
          <ul className="profile-stats fbc">
            <li className="profile-stat">{count} Photos</li>
            <li className="profile-stat">{favoriteCount} Favorites</li>
            <li className="profile-stat">{broadcasterCount} Follows</li>
            <li className="profile-stat">{followerCount} Followers</li>
          </ul>
        </div>
      </div>
    }
    return (
        <Loading loading={this.props.loading}>
          <div className="profile">        
              {code}
              {gallery}
          </div>
        </Loading>
    )
  }
}

export default ProfilePage;