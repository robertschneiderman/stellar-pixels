import React from 'react';
import Gallery from 'react-photo-gallery';
 
export default class Sample extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      this.items = this.props.items.map(item => {
        return (
          {
            src: item.url,
            height: item.height,
            width: item.width,
            aspectRatio: (item.width / item.height)
          }
        )
      });      
      return (
          <Gallery photos={this.items} />
      );
    }
}
 
// const PHOTO_SET = [
//   {
//     src: 'http://example.com/example/img1_small.jpg',
//     width: 681,
//     height: 1024,
//     aspectRatio: 1.5,
//     lightboxImage:{
//     src: 'http://example.com/example/img1_large.jpg',
//     srcset: [
//       'http://example.com/example/img1_1024.jpg 1024w',
//       'http://example.com/example/img1_800.jpg 800w',
//       'http://example.com/example/img1_500.jpg 500w',
//       'http://example.com/example/img1_320.jpg 320w',
//     ]
//     }
//   },
//   {
//     src: 'http://example.com/example/img2_small.jpg',
//     width: 600,
//     height: 600,
//     aspectRatio: 1,
//     lightboxImage:{
//     src: 'http://example.com/example/img2_large.jpg',
//     srcset: [
//       'http://example.com/example/img2_1024.jpg 1024w',
//       'http://example.com/example/img2_800.jpg 800w',
//       'http://example.com/example/img2_500.jpg 500w',
//       'http://example.com/example/img2_320.jpg 320w',
//     ]
//     }
//   }
// ];