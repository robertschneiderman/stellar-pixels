import React from 'react';
import { Link, hashHistory } from 'react-router';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      hashHistory.push("/");
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
    return(
      <ul>
        {this.props.errors.map( (error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div clasName="form-wrapper">
        <h2>{this.props.formType}</h2>
        <form className="form-login" onSubmit={this.handleSubmit}>

          <input 
            type="text"/ 
            placeholder="Email"
            onChange={this.update("email"}
            value={this.state.email}>

          <input
            type="password"
            placeholder="Password"
            onChange={this.update("password")}
            value={this.state.password}>

          <input type="submit" value="Login" />

        </form>
    )
  }
}

export default SessionForm;