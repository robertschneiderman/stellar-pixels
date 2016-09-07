import React from 'react';
import Uploader from './search/uploader';
// import Container from './/_container';

class UploadForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.upload = this.upload.bind(this);
  }

  upload(e) {
    e.preventDefault();
    this.props.uploadPhoto(this.state.url);    
    this.props.closeModal();    
  }

  render() {

    return(
      <div className="upload-form">
        <Uploader setUrl={(url) => this.setState({url})} />
        
        <form onSubmit={this.upload}>
          <input type="text" placeholder="Title" />
          <input type="text" placeholder="Description" />
          <input type="submit"/>
        </form>
      </div>

    )
  }
}

export default UploadForm;