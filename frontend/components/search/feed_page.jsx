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
    this.props.requestFeedItems('', this.props.page);        
  }

  render() {

    this.items = this.props.items.map((item, i) => {
      console.log("item:", item);
      let userProfile = `/users/${item.user_id}`;

      let favoriteCount = 0;
      for (let k in item.favorites) {
          if (item.favorites.hasOwnProperty(k)) {
             ++favoriteCount;
          }
      }       

      let favorites = this.props.currentUser.favorites;
      let imgId = item.id;

      let favorited = (favorites && favorites[imgId]);

      let btnClass = favorited ? "btn-favorites hearted" : "btn-favorites"

      return (
        <li className="feed-img-container" key={i}>
          <div className="ibm mb3">
            <img src={item.url} />
            <div className="feed-card">
              <a className="feed-avatar-container" onClick={() => {hashHistory.push(userProfile)} }>
                <img className="feed-avatar" src={item.avatar} alt=""/>
                <span className="feed-author-title">{item.email}</span>
              </a>
              <button className={btnClass} onClick={this.props.favoriteFeed.bind(this, imgId)}>
                <HeartIcon favorited={favorited} favorite={this.props.favoriteFeed.bind(this, imgId)} />
                <span className="title-favorites">{favoriteCount}</span>
              </button>
            </div>
          </div>
        </li>
      )
    });

    return (
      <Loading loading={this.props.loading}>

        <div className="feed-container">
          <ul className="feed">
          
            {this.items}
          
          </ul>
        </div>
      </Loading>

    )
  }
}

export default FeedPage;