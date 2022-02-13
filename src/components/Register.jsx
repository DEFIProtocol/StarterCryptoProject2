import React, { Component } from 'react';

class Register extends Component {
    state = {
        username:'',
        password:'',
        email: '',
    }

    handleChange = (e) => {
        this.setState({ 
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

  render() {
    return (
    <div>
        <form onSubmit={this.handleSubmit} className='login'>
            <h2 className="login-title">Register</h2>
            <div className="input-field">
                <label htmlFor="username">Username</label>
                <input type="username" id="username" onChange={this.handleChange} />
            </div>
            <div className="input-field">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={this.handleChange} />
            </div>
            <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={this.handleChange} />
            </div>
            <div className="input-field">
                <button  type = "submit" className="login-submit">
                    Register
                </button>
            </div>
        </form>
    </div>
    );
  }
}

export default Register;

