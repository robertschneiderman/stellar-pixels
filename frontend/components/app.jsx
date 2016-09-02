import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import SessionFormContainer from './session_form/session_form_container';
import Modal from 'react-modal';

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

  componentWillMount() {
    Modal.setAppElement('body');    
  }

  openModal(formType) {
    this.setState({modalIsOpen: true, formType});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.refs.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }  
  
  render() {
    const customStyles = {
      content : {
        bottom: 'auto',
        left: '50%',
        overflow: 'visible',
        padding: '3rem',
        top: '0%',
        transform: 'translate3d(-50%, -50%, 0)'         
      }
    }

    console.log("this.store:", this.store);

    const active = this.state.modalIsOpen ? 'active' : '';
    return (
      <div>
 
        <NavbarContainer openModal={this.openModal.bind(this)} />    

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          enforceFocus={false}
          style={customStyles}
          className={active}
        >
          <SessionFormContainer closeModal={this.closeModal.bind(this)} formType={this.state.formType} />
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