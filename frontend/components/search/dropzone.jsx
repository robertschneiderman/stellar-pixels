import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

class MyDropzone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadedFile: null,
      uploadedFileCloudinaryUrl: ''
    };
    this.onImageDrop = this.onImageDrop.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
  }

  onImageDrop(files) {
    this.setState({uploadedFile: files[0]});
    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post('https://api.cloudinary.com/v1_1/stellar-pixels/upload')
                     .field('upload_preset', "icqiuqif")
                     .field('file', file);

    let that = this;

    upload.end((err, response) => {
      if (err) {console.error(err);}

      if (response.body.secure_url !== '') {
        that.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });

        console.log("response.body:", response.body);

        let image = {
          url: response.body.secure_url,
          height: response.body.height,
          width: response.body.width,
          favorites: 0
        }
        
        // debugger;
        that.props.getPhoto(image);
      }
    });
  }

  render() {
    // const style = {
      
    // };

    // const activeStyle = {

    // };


    const upload = () => (
        <Dropzone
          onDrop={this.onImageDrop}
          multiple={false}
          accept="image/*"
          className="upload-dropzone"
          activeClassName="upload-dropzone-active"
          >
          {this.state.uploadedFile === null ?
            <div className="upload-pre">
              <p className="upload-pre-text">Drop an image or click to select a file.</p>
              <img className="upload-pre-img" src="http://res.cloudinary.com/stellar-pixels/image/upload/v1473451133/upload-photo_dyv79w.svg" />
            </div>
              :
            <div className="loader"></div>
          }
        </Dropzone>
    );

    const uploadedImage = () => (
        <div className="uploaded-image-container">
          <img className="uploaded-image" src={this.state.uploadedFileCloudinaryUrl} />
        </div>
    );

    return (
      <div className="upload-left-container">
        {this.state.uploadedFileCloudinaryUrl === '' ?
            upload() : uploadedImage()
        }
      </div>
    );
  }
}

export default MyDropzone;