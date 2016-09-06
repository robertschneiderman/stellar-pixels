import React from 'react';
import Modal from 'boron/OutlineModal';
import ImageDetailContainer from './image_detail_container';

class ImageDetailModal extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
        // debugger;
    setTimeout(() => {
      this.refs.modal.show();
    }, 300)
  }

  componentDidUpdate() {
        // debugger;

    this.refs.modal.show();
  }

  render() {
  var modalStyle = {
    display: 'inline-block',
    height: 'auto',
    width: 'auto'
  };

    return(
      <Modal
        ref="modal"
        modalStyle={modalStyle}
        >
        <ImageDetailContainer imageId={this.props.params.id} />
      </Modal>
    )
  }
}

export default ImageDetailModal;