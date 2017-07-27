//this should probably function ONLY AS A ROUTER, not actually rendering anyhing

import React from 'react';
import { Router, Route } from 'react-router';
import {  browserHistory, hashHistory, IndexRedirect, IndexRoute } from 'react-router';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';

import store from './store';


import {ContainerForApp} from './ContainerForApp';
import JobsInArea from './JobsInArea';
import NewUserForm from './NewUserForm';
import UserPage from './UserPage';
import LandingPage from './LandingPage';
import LogOut from './LogOut';

import {fetchJobtitlesList} from './store';

//If onEnter functions are needed write them here!!!!!
// function onProductsEnter() {
//   store.dispatch(whoami())
//   store.dispatch(fetchProducts())
//   window.sessionStorage.cart ? store.dispatch(getCartFromStorage()) : null
//   // store.dispatch(fetchCurrentOrder(store.getState().cart.orderId)) // What is this accomplishing?
//   store.dispatch(undoReviewing())
// }

function onJobsInAreaEnter(){
	store.dispatch(fetchJobtitlesList())
}


ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={ContainerForApp}>
			{/* {
				if (Object.keys(store.currentUser).length){
					return (
						<IndexRoute component={UserPage} />
							<Route path="/SignUp" component={NewUserForm} />
							<Route path="/SearchJobs" component={JobsInArea} onEnter={onJobsInAreaEnter}/>
							<Route path="/YourPage" component={UserPage} />
					)
				} else {
					return (
						<IndexRoute component={LandingPage} />
							<Route path="/SignUp" component={NewUserForm} />
							<Route path="/SearchJobs" component={JobsInArea} onEnter={onJobsInAreaEnter}/>
							<Route path="/YourPage" component={UserPage} />
					)
				}
			} */}
			<IndexRoute component={LandingPage} />
				<Route path="/SignUp" component={NewUserForm} />
				<Route path="/SearchJobs" component={JobsInArea} />
				<Route path="/YourPage" component={UserPage} />
				<Route path="/About" component={LandingPage} />
				<Route path="/LogOut" component={LogOut} />

			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
)
