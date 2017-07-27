import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import MapComponent2 from './MapComponent2';
import MapComponent3 from './MapComponent3';


const mapStateToProps = (state) => {
  return {};
}


const mapDispatchToProps = {

    // postUser: postUser,
		// postVocation: postVocation
}


class NewUser extends React.Component {
	constructor(){
		super();
		this.state = {
			userName: '',
			email: '',
      password: '',
			jobTitle: '',
      desiredLocation: {
        lat: 0,
        lng: 0,
      },
			currentLocation: {
        lat: 0,
        lng: 0,
      },
      radius: 2.5,
      currentJobRadius: 2.5,
      mapComponent: 'MapComponent2',
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
    this.getCoords = this.getCoords.bind(this);
    this.getCoordsCurrJob = this.getCoordsCurrJob.bind(this);
    this.handleClick = this.handleClick.bind(this);
	}



  handleClick(evt){
    var name = evt.target.name;
    return this.setState({
      mapComponent: name
    })
  }


  handleChange(evt){
    const name = evt.target.name;
    const value = evt.target.value;
    return this.setState({ //////////retwytruwjrrtjr
      [name]: value,
    })
  }

	handleSubmit(evt){
		evt.preventDefault();
	}

  getCoords(coordsObj){
    this.setState({ ///////////htrwrthrwhtehr
      user:{
        desiredLocation: {
          lat: coordsObj.lat,
          lng: coordsObj.lng
        }
      }
    })
  }

  getCoordsCurrJob(coordsObj){
    this.setState({ //////////////ehreqhrhet
      jobToAdd:{
        location: {
          lat: coordsObj.lat,
          lng: coordsObj.lng
        }
      }
    })
  }

	render(){
    // console.log("NEWUSERFORM STATE", this.state)
		return (
			<div>
        <div className="newUserForm">
				<form onSubmit={this.handleSubmit}>

					{/* <div>
						<label>Choose your username:</label>
						<div>
							{/* <input onChange={this.handleChange} /> */}
              {/* <span contentEditable="true" onChange={this.handleChange}>... </span>

						</div>
					</div> */}

          <div>
            <label>Choose a username:</label>
            <div>
              <input onChange={this.handleChange} name="user.username" />
            </div>
          </div>


					<div>
						<label>Your email:</label>
						<div>
							<input onChange={this.handleChange} name="user.email" />
						</div>
					</div>

          <div>
            <label>What's your job title?</label>
            <div>
              <input onChange={this.handleChange} />
            </div>
          </div>

					<div>
						<label>Where would you like to work?</label>
						<div className="withinMiles">
							<span className="plainSpan">Within</span><select onChange={this.handleChange} name="radius" defaultValue={2.5}>
                <option value={1}>1</option>
                <option value={2.5}>2.5</option>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
              </select><span className="plainSpan"> mile(s) of...</span><p className="plainSpan"><i>click <button onClick={this.handleClick} name="MapComponent2">here</button>, then select a spot on the map!</i></p>
              <input onChange={this.handleChange} name="user.desiredLocation" className="coordsHolder" value={this.state.user.desiredLocation.lat + ',' + this.state.user.desiredLocation.lng }/>
						</div>
					</div>


					<div>
						<label>Approximate location* of your current employer:</label>
            <div className="withinMiles">
							<span className="plainSpan">Within</span><select onChange={this.handleChange} name="currentJobRadius" defaultValue={2.5}>
                <option value={1}>1</option>
                <option value={2.5}>2.5</option>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
              </select><span className="plainSpan"> mile(s) of...</span><p className="plainSpan"><i>click <button onClick={this.handleClick} name="MapComponent3">here</button>, then select a spot on the map!</i></p>
              <input onChange={this.handleChange} name="jobToAdd.location" className="coordsHolder" value={this.state.user.desiredLocation.lat + ',' + this.state.user.desiredLocation.lng }/>
						</div>
					</div>

					<div>
						<button type="submit">SUBMIT</button>
					</div>

				</form>
      </div>

      {
        this.state.mapComponent === 'MapComponent2' ?
        <div>
          <MapComponent2 getCoords={this.getCoords} radius={+this.state.radius}/>
        </div>
        :
        <div>
          <MapComponent3 getCoords={this.getCoordsCurrJob} currentJobRadius={+this.state.currentJobRadius} radius={+this.state.radius} userDesLocation={this.state.user.desiredLocation} />
        </div>

      }


        <h3 className="boutYourLocation">*We take the location you give us and put it within an "x"-mile radius of an overlapping geolocation. If you have any questions, feel free to wait till I build this feature...</h3>
			</div>

		)
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(NewUser);

// EXAMPLE FROM WIKI-REACT PROJECT


// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { postArticle } from './AllTheStuff';
//
//
// const mapStateToProps = (state) => {
//   return {};
// }
//
//
// const mapDispatchToProps = {
//     postArticle: postArticle
// }
//
//
// export class AddPage extends Component {
//   constructor(){
//     super();
//     this.state = {
//       name: '',
//       email: '',
//       title: '',
//       content: '',
//       status: 'open',
//       tags: [],
//     }
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//
//
//   handleChange(evt){
//     const type = evt.target.name;
//     const value = evt.target.value;
//     this.setState({
//       [type] : value
//     });
//     console.log("ADDPAGE STATE IS:", this.state);
//   }
//
//   handleSubmit(evt){
//     evt.preventDefault();
//     this.props.postArticle(this.state);
//   }
//
//
//
//
//   render () {
//
//     console.log("PROPS TO ADDPAGE IS:", this.props);
//
//     return (
//
//
//       <div>
//         <h3>Add a Page REACT IS RENDERING</h3>
//         <hr />
//         <form onSubmit={this.handleSubmit}>
//
//           <div className="form-group">
//             <label htmlFor="name" className="col-sm-2 control-label">Author Name</label>
//             <div className="col-sm-10">
//               <input name="name" type="text" className="form-control" onChange={this.handleChange}/>
//             </div>
//           </div>
//
//           <div className="form-group">
//             <label htmlFor="email" className="col-sm-2 control-label">Author Email</label>
//             <div className="col-sm-10">
//               <input name="email" type="text" className="form-control" onChange={this.handleChange}/>
//             </div>
//           </div>
//
//           <div className="form-group">
//             <label htmlFor="title" className="col-sm-2 control-label">Page Title</label>
//             <div className="col-sm-10">
//               <input name="title" type="text" className="form-control" onChange={this.handleChange}/>
//             </div>
//           </div>
//
//           <div className="form-group">
//             <label htmlFor="content" className="col-sm-2 control-label">Content</label>
//             <div className="col-sm-10">
//               <textarea name="content" onChange={this.handleChange}></textarea>
//             </div>
//           </div>
//
//           <div className="form-group">
//             <label htmlFor="status" className="col-sm-2 control-label">Status</label>
//             <div className="col-sm-10">
//               <select name="status">
//                 <option>open</option>
//                 <option>closed</option>
//               </select>
//             </div>
//           </div>
//
//           <div className="form-group">
//             <label htmlFor="tags" className="col-sm-2 control-label">Tags</label>
//             <div className="col-sm-10">
//               <input name="tags" type="text" className="form-control" onChange={this.handleChange}/>
//             </div>
//           </div>
//
//           <div className="col-sm-offset-2 col-sm-10">
//             <button type="submit" className="btn btn-primary">submit</button>
//           </div>
//
//         </form>
//       </div>
//     );
//   }
// }
//
//
// export default connect(mapStateToProps, mapDispatchToProps)(AddPage);
