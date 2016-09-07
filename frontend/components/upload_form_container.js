import {connect} from 'react-redux';
import UploadForm from './upload_form';
import { uploadPhoto } from '../actions/search_actions';

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = (dispatch) => {
  return {
    uploadPhoto: url => dispatch(uploadPhoto(url)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadForm);
