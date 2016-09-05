import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import SessionFormContainer from './session_form/session_form_container';
import Modal from 'boron/OutlineModal';

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


  showModal(formType) {
      this.setState({formType: formType});    
      this.refs.modal.show();
  }

  hideModal() {
      this.refs.modal.hide();
  }

  
  render() {

    const active = this.state.modalIsOpen ? 'active' : '';
    return (
      <div>
 
        <NavbarContainer openModal={this.showModal.bind(this)} location={this.props.location} />    

        <Modal
          ref="modal"
          keyboard={this.callback}
        >
          <SessionFormContainer closeModal={this.hideModal.bind(this)} formType={this.state.formType} />
        </Modal>     


        {this.props.children}

      </div>
      
    )     
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