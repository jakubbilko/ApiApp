import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { login } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: '',
      password: '',
      loginValid: null,
      passwordValid: null,
      formValid: false };

    this.onLoginClick = this.onLoginClick.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }

  onLoginClick() {
    const { login, password } = this.state;
    this.props.login({ login, password });
  }

  inputChange (e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    },
    () => this.validateField(name, value));
  }

  validateField(name, value) {
    const result = !value.trim() ? false : true;
    this.setState({
      [`${name}Valid`]: result
    },
    () => this.validateForm());
  }

  validateForm() {
    this.setState({ formValid: this.state.loginValid && this.state.passwordValid });
  }

  render() {
    return (
      <div className="login-form">
        <h1 className="login-form__title">Login</h1>
        <TextField
          name="login"
          fullWidth={true}
          floatingLabelText="Username"
          value={this.state.login}
          onChange={this.inputChange}
        />
        <TextField
          name="password"
          fullWidth={true}
          floatingLabelText="Password"
          type="password"
          value={this.state.password}
          onChange={this.inputChange}
        />
        <RaisedButton onClick={this.onLoginClick} className="login-form__button" label="Login" disabled={!this.state.formValid} primary={true} fullWidth={true} />
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func
};

export default connect(null, { login })(Login);
