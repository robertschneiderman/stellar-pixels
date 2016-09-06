import {connect} from 'react-redux';
import ImageDetail from './image_detail';

const mapStateToProps = (state, {imageId}) => {
  // console.log("params:", params);

  console.log("imageId:", imageId);

  const image = state.search.items.find((item) => {
    console.log("item.id:", item.id);
    if (item.id == imageId) return true;
  });

  return {
    image: image
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestSearchItems: items => dispatch(requestSearchItems(items)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageDetail);
