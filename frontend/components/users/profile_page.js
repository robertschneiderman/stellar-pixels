import React from 'react';
import GalleryContainer from '../search/gallery_container';
import LazyLoad from 'react-lazy-load';
import Loading from '../search/loading';
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
        console.log("heroImg.scrollTop:", heroImg.scrollTop);
        heroImg.animate({'background-postion': '+=30px 0'}, 100);        
        // let styles = {
        //   backgroundImage : 'url(' + this.photos[1].url + ')',
        // };
        console.log("here");
        // $('#hero-img').css(styles);
      });
    }     
  }

  render() {
    // debugger;
    // this.items = this.user.photos;


    let style = {};
    let code;
    this.photos = [];    
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

      const style = {
        backgroundImage: 'url(' + this.photos[1].url + ')',
        backgroundPosition: 0
      }

      this.photos = this.photos.slice(2).map(item => {
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

      code = <div className="profile-intro">
        <div className="profile-hero" id="hero-img" style={style}>
          <button className="profile-follow">Follow</button>
        </div>
        <div className="profile-info">
          <img className="profile-avatar" src={this.props.user.avatar} alt=""/>
          <p className="profile-title">{this.props.user.email}</p>
          <ul className="profile-stats fbc">
            <li className="profile-stat">{count} Photo Views</li>
            <li className="profile-stat"></li>
            <li className="profile-stat"></li>
            <li className="profile-stat"></li>
          </ul>
        </div>
      </div>
    }
    return (
      <div className="profile">        
          {code}
          <GalleryContainer photos={this.photos} disableLightbox={true} />
      </div>
    )
  }
}

export default ProfilePage;