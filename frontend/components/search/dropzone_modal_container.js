import {connect} from 'react-redux';
import DropzoneComponent from './dropzone_component';

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = (dispatch) => {
  return {
    uploadPhoto: file => dispatch(uploadPhoto(file)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DropzoneComponent);
