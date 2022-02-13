import React, { Component } from 'react';



class Login extends Component {
    state = {
        email:'',
        password:''
    }

    handleChange = (e) => {
        this.setState({ 
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }

  render() {
       
    return (
    <div>
        <form onSubmit={this.handleSubmit} className='login'>
            <h2 className="login-title">Login</h2>
            <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={this.handleChange} />
            </div>
            <div className="input-field">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={this.handleChange} />
            </div>
            <div className="input-field">
                <button  type = "submit" className="login-submit">
                    Login
                </button>
                <div>
                
                </div>
            </div>
        </form>
    </div>
    );
  }
}

export default Login;

