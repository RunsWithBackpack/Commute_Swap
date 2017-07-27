import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Link from 'react-router'
import AnyReactComponent from './AnyReactComponent'



///////DUMB MARKER COMPONENT HERE, SMART ONE BELOW
// const AnyReactComponent = ({ text, lat, lng, zoom, lats, id, submitVocId }) => {
//
//   var radius = 345/(lats * 68.703) * 2
//   var adjustment = 0 - (radius/2)
//   var textSize = radius*0.4
//   var borderWidth = zoom*0.5
//
//
//   function handleClick(evt){
//     console.log("EVT TARGET:", evt)
//     // console.log("from handleClick", childProps.vocationObj.get('id'))
//   }
//
//   const markerStyle = {
//     width: `${radius}px`,
//     height: `${radius}px`,
//     lineHeight: `${radius}px`,
//     fontSize: `${textSize}px`,
//     textAlign: 'center',
//     backgroundColor: 'rgba(119,187,187, 0.8)',
//     borderRadius: '100%',
//     border: `${borderWidth}px solid rgba(153,85,0, 1)`,
//     position: 'relative',
//     left: `${adjustment}px`,
//     top: `${adjustment}px`,
//
//   }
//   return(
//     <div key={id} className="circleThing" style={markerStyle} onClick={handleClick.bind(this)}>
//       {text}
//     </div>
//
//   )
// }


///SMART COMPONENT- WAS MOVED TO ITS OWN MODULE
// class AnyReactComponent extends Component {
//
//   render(){
//     var text = this.props.text
//     var lat = this.props.lat
//     var lng = this.props.lng
//     var zoom = this.props.zoom
//     var lats = this.props.lats
//     var id = this.props.id
//
//
//     var radius = 345/(lats * 68.703) * 2
//     var adjustment = 0 - (radius/2)
//     var textSize = radius*0.4
//     var borderWidth = zoom*0.5
//
//
//     const markerStyle = {
//       width: `${radius}px`,
//       height: `${radius}px`,
//       lineHeight: `${radius}px`,
//       fontSize: `${textSize}px`,
//       textAlign: 'center',
//       backgroundColor: 'rgba(119,187,187, 0.8)',
//       borderRadius: '100%',
//       border: `${borderWidth}px solid rgba(153,85,0, 1)`,
//       position: 'relative',
//       left: `${adjustment}px`,
//       top: `${adjustment}px`,
//     }
//
//     function handleClick(evt){
//       var vocId = evt.target.id
//       setSelectedVoc(vocId)
//     }
//
//     return(
//       <div key={id} id={id} className="circleThing" style={markerStyle} onClick={handleClick.bind(this)}>
//         {text}
//       </div>
//     )
//   }
// }



class SimpleMap extends Component {
  constructor(){
    super()
    this.state = {
      zoom: 14,
      lats: 0.076,
      selectedVoc: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }



  handleChange(args){
    var nsBounds = [];
    var weBounds = [];
    var center = args.center.lat
    var lats = this.state.lats
    args.bounds.ne.lat ? lats = args.bounds.ne.lat - center : console.log("nope")
    args.bounds.nw ? nsBounds[0] = args.bounds.nw.lat : console.log("nope")
    args.bounds.nw ? weBounds[0] = args.bounds.nw.lng : console.log("nope")
    args.bounds.se ? nsBounds[1] = args.bounds.se.lat : console.log("nope")
    args.bounds.se ? weBounds[1] = args.bounds.se.lng : console.log("nope")

    return this.setState({
      zoom: args.zoom,
      lats: lats,
      nsBounds: nsBounds,
      weBounds: weBounds,
    })
  }


  render() {

    var lats = this.state.lats
    var zoom = this.state.zoom


    return (
      <div className="mapContainer">
      <GoogleMapReact
        resetBoundsOnResize //added after seeing issue on GitHub
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        onChange={this.handleChange}
      >

        {
              this.props.desJobs &&

              this.props.desJobs.map(function(vocationObj){
                var lat = vocationObj.location.point[0]
                var lng = vocationObj.location.point[1]
                var yrsExp = vocationObj.yearsExperience


                return (
                    <AnyReactComponent
                      key={vocationObj.id}
                      lat={lat}
                      lng={lng}
                      text={yrsExp}
                      zoom={zoom}
                      lats={lats}
                      id={vocationObj.id}
                      vocationObj={vocationObj}
                    />
                )
              })

        }

      </GoogleMapReact>
      </div>
    );
  }
}

SimpleMap.defaultProps = {
  center: {lat: 41.888543, lng: -87.6376322},
  zoom: 10,
};

export default SimpleMap;
