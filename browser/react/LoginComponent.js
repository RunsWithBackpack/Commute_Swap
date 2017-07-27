import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { fetchCurrentUser } from './store';


const mapStateToProps = (state) => {
  return {};
}


const mapDispatchToProps = {
  fetchCurrentUser: fetchCurrentUser,

    // postUser: postUser,
		// postVocation: postVocation
}



class LoginComponent extends React.Component {
  constructor(){
    super()
    this.state = {
      email: '',
      password: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt){
    let name = evt.target.name;
    let value = evt.target.value;
    return this.setState({
      [name]: value,
    })
  }

  handleSubmit(evt){
    evt.preventDefault();
    this.props.fetchCurrentUser(this.state.email, this.state.password)
  }

  render(){
    return(
      <div className="loginForm">
        <h2 className="formHeading">Login</h2>
        <form className="loginFormInput" onSubmit={this.handleSubmit}>
          <div>
            <label className="loginLabel">Email:</label>
            <div>
              <input className="loginInput" onChange={this.handleChange} name="email" />
            </div>
          </div>

          <div>
            <label className="loginLabel">Password:</label>
            <div>
              <input type="password" className="loginInput" onChange={this.handleChange} name="password" />
              <button className="invisiButton" type="submit">SUBMIT</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)
