//there's a good example for how to implement a user sign-in/out nav in auther components/navbar

import React from 'react';
import { connect } from 'react-redux';
import { Link, hashHistory } from 'react-router';
import { convToRoute } from './utils'


const mapStateToProps = (state) => {
  return {
		navButtons: state.navigationButtons,
		searchQuery: state.searchQuery,
	};
}


const mapDispatchToProps = {
    // postUser: postUser,
		// postVocation: postVocation
}




function Nav(props){
	// console.log("Nav Buttons",props.navButtons)
	return (
		<div className="navDiv">
			{
				props.navButtons.map(function(btnLabel){
					var btnText = btnLabel.toUpperCase();
					var routeName = "/" + btnLabel.replace(/\s/g, '');
					return <h4 key={btnLabel}><Link to={routeName}>{btnText}</Link></h4>
				})
			}
		</div>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
