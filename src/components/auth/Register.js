import React from 'react';
import Auth from '../../lib/Auth';
import axios from 'axios';
// import Flash from '../../lib/Flash';


class Register extends React.Component{
  state = {
    errors: {}
  }

  handleChange = (e) => {
    console.log(e.target.name);
    //reason for [] is because you're saying to treat it like a variable. e.target is the input and name is a key inside of that
    this.setState({ [e.target.name]: e.target.value}, () => console.log(this.state));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/register', this.state)
      .then(res => {
        console.log(res);
        //setting token inside of local storage
        Auth.setToken(res.data.token);
      })
      .then(() => Flash.setMessage('success', 'Thanks for registering!'))
      .then(() => this.props.history.push('/bangers'));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field">
          <label htmlFor="username">Username</label>
          <input className="input"
            placeholder="Username"
            name="username"
            onChange={this.handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            className="input"
            placeholder="Email"
            name="email"
            onChange={this.handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="input"
            placeholder="Password"
            name="password"
            onChange={this.handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="passwordConfirmation">Password Confirmation</label>
          <input
            type="password"
            className="input"
            placeholder="Password Confirmation"
            name="passwordConfirmation"
            onChange={this.handleChange}
          />
        </div>

        <button className="button is-primary">Submit</button>
      </form>
    );
  }
}

export default Register;
