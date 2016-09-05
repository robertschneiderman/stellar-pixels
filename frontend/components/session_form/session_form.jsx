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

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
    // console.log("here?");
      this.props.closeModal();
      this.props.router.push("/search");
      // this.props.router.refresh();
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

        <img src="/assets/svg/logo.svg" alt=""/>



        <h2 className="react-modal-title">The only place on the Internet for amazing photos</h2>

        <input
          placeholder="Email"        
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