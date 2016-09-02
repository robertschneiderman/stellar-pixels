import React from 'react';
import PerfectGrid from 'react-perfect-grid';


class MyPerfectGrid extends React.Component {

  constructor(props) {
    super(props);
    console.log("making grid!");
    console.log("this.props.items:", this.props.items);
    
    console.log("this.items:", this.items);

  }

  render() {
    let items = [];
    if (this.props.items) {
      items = this.props.items.map(item => ({
        url: item.url
      }));
    }

    if (items.length > 0) {
      return(
        <PerfectGrid
          items={items}
          maxHeight={300}
          margins={20}
          order={true} />
      )
    } else {
      return (<div></div>)
    }
    
  }

}

export default MyPerfectGrid;
