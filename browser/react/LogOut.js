import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { logoutUser } from './store'


const mapStateToProps = (state) => {
  return {}
}


const mapDispatchToProps = {
  logoutUser: logoutUser,
    // postUser: postUser,
		// postVocation: postVocation
}


export class LogOut extends React.Component{
  constructor(){
    super()
  }

  componentWillMount(){
    // console.log("HASH HISTORY IS", hashHistory) ////IT'D BE NICE IF THERE WERE A WAY TO CLEAR THIS OUT UPON LOGOUT
    this.props.logoutUser();
  }

  render(){

    return (
      <div>
        <p>Logging out...</p>
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LogOut)
