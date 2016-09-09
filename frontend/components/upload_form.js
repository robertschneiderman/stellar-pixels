import React from 'react';
// import Uploader from './search/uploader';
import MyDropzone from './search/dropzone';
import { hashHistory } from 'react-router';
// import Container from './/_container';

class UploadForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.upload = this.upload.bind(this);
    this.getPhoto = this.getPhoto.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }

  upload(e) {
    e.preventDefault();
    this.props.uploadPhoto(this.image);    
    this.props.closeModal();
    hashHistory.push(`/users/${this.props.currentUser.id}`);  
  }

  getPhoto(image) {
    this.image = image;
  }

  inputChange(e) {
    if (e.currentTarget.id === 'title') {
      this.image.title = e.currentTarget.value;
    } else {
      this.image.tags = e.currentTarget.value.split(' ');
    }
  }

  render() {

    return(
      <div className="upload-container">
        <MyDropzone getPhoto={this.getPhoto} />
        
        <form className="upload-form" onSubmit={this.upload}>
          <input className="upload-input" id="title" type="text" placeholder="Title" onChange={this.inputChange} />
          <input className="upload-input" id="tags" type="text" placeholder="Tags" onChange={this.inputChange} />
          <button className="upload-btn">Submit</button>
        </form>
      </div>

    )
  }
}

export default UploadForm;