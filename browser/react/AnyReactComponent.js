import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Link from 'react-router'
import { connect } from 'react-redux';
import { setSelectedVoc } from './store'


const mapStateToProps = (state) => {
  return {
    // // jobtitlesList: state.jobtitlesList,
    // // desJobs: state.desJobs,
    // selectedVoc: state.selectedVoc ///need to add to state
  };
}


const mapDispatchToProps = {
  // fetchDesJobs: fetchDesJobs,
  setSelectedVoc: setSelectedVoc,
}




class AnyReactComponent extends Component {

  render(){
    // console.log("PROPS TO ANYCOMP", this.props)
    var text = this.props.text
    var lat = this.props.lat
    var lng = this.props.lng
    var zoom = this.props.zoom
    var lats = this.props.lats
    var id = this.props.id


    var radius = 345/(lats * 68.703) * 2
    var adjustment = 0 - (radius/2)
    var textSize = radius*0.4
    var borderWidth = zoom*0.5


    const markerStyle = {
      width: `${radius}px`,
      height: `${radius}px`,
      lineHeight: `${radius}px`,
      fontSize: `${textSize}px`,
      textAlign: 'center',
      backgroundColor: 'rgba(119,187,187, 0.8)',
      borderRadius: '100%',
      border: `${borderWidth}px solid rgba(153,85,0, 1)`,
      position: 'relative',
      left: `${adjustment}px`,
      top: `${adjustment}px`,
    }

    function handleClick(evt){
      var vocId = evt.target.id
      console.log("vocId in handleClick",vocId)
      setSelectedVoc(vocId)
    }

    return(
      <div key={id} id={id} className="circleThing" style={markerStyle} onClick={handleClick.bind(this)}>
        {text}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnyReactComponent)
