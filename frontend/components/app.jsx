import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import SessionFormContainer from './session_form/session_form_container';
import Modal from 'boron/OutlineModal';
import UploadFormContainer from './upload_form_container';

// import GreetingContainer from './greeting/greeting_container';

  // <SessionFormContainer />

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {formType: 'login'};
    // this.children = children;
    // console.log("children:", children);
  }

  componentDidMount() {
    this.setState({modalIsOpen: false});    
  }


  showSessionModal(formType) {
    this.setState({formType: formType});    
    this.refs.sessionModal.show();
  }

  showUploadModal() {
    this.refs.uploadModal.show();
  }  

  hideSessionModal() {
    this.refs.sessionModal.hide();
  }

  hideUploadModal() {
    this.refs.sessionModal.hide();
  }
    
  render() {

    const active = this.state.modalIsOpen ? 'active' : '';

    return (
      <div>
 
        <NavbarContainer 
          openSessionModal={this.showSessionModal.bind(this)}
          openUploadModal={this.showUploadModal.bind(this)}
          location={this.props.location}
        />    

        <Modal
          ref="sessionModal"
          keyboard={this.callback}
        >
          <SessionFormContainer closeModal={this.hideSessionModal.bind(this)} formType={this.state.formType} />
        </Modal> 

        <Modal
          ref="uploadModal"
        >
          <UploadFormContainer closeModal={this.hideUploadModal.bind(this)} />
        </Modal>  

        {this.props.children}

      </div>
      
    )     
              // <UploadForm />
  }
} 

// export const app = ({children}) => (
//   <div>
//   <Modal
//     isOpen={bool}
//     onAfterOpen={afterOpenFn}
//     onRequestClose={requestCloseFn}
//     closeTimeoutMS={n}
//     style={customStyle}
//   >
//     <h1>Modal Content</h1>
//     <p>Etc.</p>
//   </Modal>  
//     <NavbarContainer />    
//     {children}
//   </div>
// );


export default App;