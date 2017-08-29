import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="login-form">
        <h1 className="login-form__title">Login</h1>
        <TextField
          fullWidth={true}
          floatingLabelText="Username"
        />
        <TextField
          fullWidth={true}
          floatingLabelText="Password"
          type="password"
        />
        <RaisedButton className="login-form__button" label="Login" primary={true} fullWidth={true} />
      </div>
    );
  }
}

export default Login;
