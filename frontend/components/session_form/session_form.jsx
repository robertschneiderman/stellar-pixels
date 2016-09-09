import React from 'react';
import { withRouter, Link, hashHistory } from 'react-router';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
      // debugger;

    // if (this.props.demoLogin) {
    //   $(".react-modal-input").typed({
    //     strings: ["First sentence.", "Second sentence."],
    //     typeSpeed: 0
    //   });      
    // }    
  }

  componentDidUpdate() {
    if (this.props.loggedIn) {
      this.props.closeModal();
    }
  }

  update(field) {
    return e => { this.setState({[field]: e.currentTarget.value }); };
  }

  renderErrors() {
    if (this.props.errors.length > 1) {
      return(
        <ul>
          {this.props.errors.map( (error, i) => (
            <li key={`error-${i}`}>{error}</li>
          ))}
        </ul>
      )
    }
  }

  handleSubmit(e) {
    // debugger;
    e.preventDefault();
    const user = this.state;
    this.props.formType === 'login' ? this.props.login({user}) : this.props.signup({user});
  }


  render() { 
    const formText = this.props.formType === 'signup' ? 'Sign Up' : 'Log In';

    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="form-wrapper">
        { this.renderErrors() }

        <img src="http://res.cloudinary.com/stellar-pixels/image/upload/v1473451134/logo_scj8cw.svg" alt=""/>



        <h2 className="react-modal-title">The only place on the Internet for amazing photos</h2>

        <input
          placeholder="Username"        
          className="react-modal-input"
          type="text"
          onChange={this.update("email")}
          value={this.state.email}/>

        <input
        placeholder="Password"
        className="react-modal-input"
        type="password"
        onChange={this.update("password")}
        value={this.state.password} />

        <button className="btn react-modal-btn">{formText} to Stellar Pixels</button>
      </form>
    )
  }
}

export default withRouter(SessionForm);