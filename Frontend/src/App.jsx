
import React, { Component } from 'react';
import axios from 'axios';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name: this.state.name,
      email: this.state.email
    };

 
    axios.post('http://localhost:3000/users', userData)
      .then(res => {
        console.log('Data saved:', res.data);
        this.setState({ name: '', email: '' }); 
      })
      .catch(err => {
        console.error('Error saving data:', err);
      });
  };

  render() {
    return (
      <div style={{ maxWidth: '400px', margin: '50px auto' }}>
        <h2>User Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label>Name:</label><br />
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Email:</label><br />
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default UserForm;
