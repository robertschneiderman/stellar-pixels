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
    this.handleClick = this.handleClick.bind(this);
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

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === "login") {
      return <Link to="/signup">sign up instead</Link>;
    } else {
      return <Link to="/login">log in instead</Link>
    }
  }

  renderErrors() {
    if (this.props.errors) {
      return(
        <ul>
          {this.props.errors.map( (error, i) => (
            <li key={`error-${i}`}>{error}</li>
          ))}
        </ul>
      )
    }
  }

  handleClick() {
    // debugger;
    const user = this.state;
    this.props.formType === 'login' ? this.props.login({user}) : this.props.signup({user});
  }

  closeModal() {

  }

  render() { 
    const formText = this.props.formType === 'signup' ? 'Sign Up' : 'Log In';

    return (
      <div className="form-wrapper">
        { this.renderErrors() }

        <button onClick={this.props.closeModal} className="btn btn-modal-close">x</button>

        <h2 className="react-modal-title">{formText} to Stellar Pixels</h2>

        <label className="react-modal-label">
          <span>Email:</span>
          <input 
            className="react-modal-input"
            type="text"
            onChange={this.update("email")}
            value={this.state.email}/>
        </label>

        <label className="react-modal-label">
          <span>Password:</span>
          <input
          className="react-modal-input"
          type="password"
          onChange={this.update("password")}
          value={this.state.password} />
        </label>

        <button onClick={this.handleClick.bind(this)} className="btn react-modal-btn">{formText}</button>
      </div>
    )
  }
}

export default withRouter(SessionForm);