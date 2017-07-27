import React from 'react';
import { connect } from 'react-redux';
import { browserHistory, hashHistory } from 'react-router';
import { postJobtitle, fetchJobtitlesList, fetchDesJobs } from './store'
import MapComponent from './MapComponent'

//IMPORT THE NECESSARY DISPATCHERS FROM THE STORE here
// import SimpleMap from './MapComponent';



const mapStateToProps = (state) => {
  return {
    jobtitlesList: state.jobtitlesList,
    desJobs: state.desJobs,
    selectedVoc: state.selectedVoc, ///need to add to state
    currentUser: state.currentUser,
  };
}


const mapDispatchToProps = {
  postJobtitle: postJobtitle,
  fetchJobtitlesList: fetchJobtitlesList,
  fetchDesJobs: fetchDesJobs,
}



export class JobsInArea extends React.Component{

  constructor(){
    super();

    this.handleChange = this.handleChange.bind(this);
  }


  componentWillMount(){
    this.props.fetchJobtitlesList();
  }

  handleChange(evt){
    // console.log('HANDLESUBMIT VALUE', evt.target.value)
    const desiredJobTitle = evt.target.value;
    this.props.fetchDesJobs(desiredJobTitle);
  }

  // handleSubmit(evt){
  //   console.log('HANDLESUBMIT VALUE', evt.target.value)
  //   evt.preventDefault();
  //   const desiredJobTitle = evt.target.value;
  //   this.props.fetchDesJobs(desiredJobTitle);
  // }


  render(){
    // console.log('PROPS TO JOBSINAREA:', this.props)
    return (
      <div>
        <h2>Hey, {this.props.currentUser.userName }, let's find some jobs in your area!</h2>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="selectJobtitle">Select an occupation:</label>
          <select name="selectJobtitle" onChange={this.handleChange}>
            {
              // console.log("job titles:",this.props.jobtitlesList)
              this.props.jobtitlesList.length > 1 && this.props.jobtitlesList.map(function(jobtitle){
                return (
                  <option key={jobtitle.id}>{jobtitle.name}</option>
                )
              })
            }
          </select>
          {/* <button type="submit" className="lilButton">SUBMIT</button> */}
        </form>


        <h3 className="noMarginBelow">Matching jobs in your desired area:</h3>

        <ul className="foundJobsUl">
          {
            this.props.desJobs.map(function(vocationObj){
              const vocationTitle = vocationObj.jobTitle;
              const vocationYrsExp = vocationObj.yearsExperience;
              const vocationLastLogin = vocationObj.updatedAt;
              return (
                <li key={vocationObj.id}>
                  <span className="lilSpan butNotThatLittle">{vocationTitle}, experience: {vocationYrsExp} years, last login: {vocationLastLogin}</span>
                  <hr></hr>
                </li>
              )
            })
          }
        </ul>
        <MapComponent className="mainMap" desJobs={this.props.desJobs}/>
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(JobsInArea)
