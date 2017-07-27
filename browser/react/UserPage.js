import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import store, { setNavButtons } from './store';
import InboxComponent from './InboxComponent';
import ConvoBox from './ConvoBox';


const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
}


const mapDispatchToProps = {

    // postUser: postUser,
		// postVocation: postVocation
}


class UserPage extends React.Component {
	constructor(){
		super();
		this.state = {
			user: {
				userName: '',
				email: '',
				desiredLocation: {},
			},
			jobToAdd: {
				jobTitle: '',
				location: {},
			}
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

  componentWillMount(){
    store.dispatch(setNavButtons(["About", "Log Out", "Search Jobs"]))
  }


	///////////////I'll probably have to name the input fields like name="user.userName"

	handleChange(evt){
		const name = evt.target.name;
		const value = evt.target.value;
		this.setState({
			[name]: value,
		})
	}

	handleSubmit(evt){
		evt.preventDefault();
	}

	render(){
    // console.log('IN NEW USER FORM')
		return (
			<div>

				{/* <h2 className="h2UserPageModified"><span className="lilSpan">Glad you're here, DEFAULT_USER!</span><span className="bigSpan">Let's get to work!</span></h2> */}

        {/* <h2 className="h2UserPageModified">{this.props.currentUser.userName} logged in.</h2> */}
        {this.props.currentUser.id && <InboxComponent />


        }

        {/* <form onSubmit={this.handleSubmit} className="clearEverything">
          <div>
            <label className="goLeft">Your vocation(s):</label>
            <div className="inputWidthSetter">
              <input onChange={this.handleChange} />
              <span className="goLeftInput" contentEditable="true" onChange={this.handleChange} />
            </div>
            <button type="submit" className="lilButton">SUBMIT CHANGES</button>
          </div>
        </form>


        <form onSubmit={this.handleSubmit} className="clearEverything">
          <div>
            <label className="goLeft">Your desired location:</label>
            <div className="inputWidthSetter">
              <input onChange={this.handleChange} />
              <span className="goLeftInput" contentEditable="true" onChange={this.handleChange} />
            </div>
            <button type="submit" className="lilButton">SUBMIT CHANGES</button>
          </div>
        </form> */}
        <ConvoBox />

        </div>

		)
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
