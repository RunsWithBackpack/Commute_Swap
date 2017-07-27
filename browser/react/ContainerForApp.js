import React from 'react';
import Nav from './Nav';


// export default function ContainerForApp(){
// 	const children = React.Children
// 	console.log(children);
// 	return (
// 		<div id="MainContainer" >
// 			<h1> IN CONTAINER FOR APP </h1>
// 		</div>
// 	)
// }


export class ContainerForApp extends React.Component {

	render(){

		return (
			<div id="MainContainer" >
				<p className="mainNav"><Nav /></p>
	 			{/* <h1 className="mainTitle"> CommuteSwap </h1><p className="mainNav"><Nav /></p> */}
				{this.props.children}
			</div>
		)
	}
}
