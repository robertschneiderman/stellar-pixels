import React from 'react';
import Dropzone from './dropzone';
import request from 'superagent';


const CLOUDINARY_UPLOAD_PRESET = 'icqiuqif';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/stellar-pixels/upload';

export default class ContactForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      uploadedFileCloudinaryUrl: ''
    };
  }  

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }  

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });

        this.props.setUrl(response.body.secure_url);
      }
    });
  }  

  render() {
    const upload = () => (
        <Dropzone
          onDrop={this.onImageDrop}
          multiple={false}
          accept="image/*">
          {this.state.uploadedFile === null ?
            <div className="pre-uploading">
              <div className="upload-text">Drop an image or click to select a file.</div>
              <img className="camera" src="http://res.cloudinary.com/dhorsi7vf/image/upload/v1473089805/camera_r5zsgv.png" />
            </div>
              :
            <div className="loader">Loading...</div>
          }
        </Dropzone>
    );

    const uploadedImage = () => (
        <div className="uploaded-image-container">
          <img className="uploaded-image" src={this.state.uploadedFileCloudinaryUrl} />
        </div>
    );

    return (
      <div className="left-image-container">
        {this.state.uploadedFileCloudinaryUrl === '' ?
            upload() : uploadedImage()
        }
      </div>
    );
  }
}