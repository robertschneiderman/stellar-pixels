import React from 'react';
import { hashHistory } from 'react-router';
// import Container from './/_container';

class FeedPage extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestFeedItems('', this.props.page);        
  }

  render() {

    this.items = this.props.items.map((item, i) => {
      console.log("item:", item);
      let userProfile = `/users/${item.user_id}`;      
      return (
        <li className="feed-img-container" key={i}>
          <div className="ibm mb3">
            <img src={item.url} />
            <div className="feed-card">
              <a className="feed-avatar-container" onClick={() => {hashHistory.push(userProfile)} }>
                <img className="feed-avatar" src={item.avatar} alt=""/>
                <span className="feed-author-title">{item.email}</span>
              </a>
              <button className="feed-btn-favorites">
                <svg className="icon-heart" version="1.1" viewBox="-6.9 -13.1 40 40" x="0px" y="0px">
                <path className="shape" d="M20.7-7.2c-5.8,0-7.6,4.3-7.6,4.3l0,0c0,0-1.8-4.3-7.6-4.3s-8.4,3.7-8.4,8.1c0,2.2,1.8,5.2,3.6,7.3
          C2.5,10.3,13.1,20.6,13.1,21l0,0c0-0.4,10.6-10.7,12.4-12.7c1.8-2,3.6-5,3.6-7.3C29.1-3.4,26.4-7.2,20.7-7.2z" fill="#FFFFFF"></path>
                </svg>
                <span className="title-favorites">{item.favorites}</span>
              </button>
            </div>
          </div>
        </li>
      )
    });

    return (

      <div className="feed-container">
        <ul className="feed">
        
          {this.items}
        
        </ul>
      </div>

    )
  }
}

export default FeedPage;