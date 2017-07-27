import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

const AnyReactComponent = ({ text, lat, lng, zoom, lats, rad }) => {

  var radius = (69*(rad*2))/(lats * 68.703) * 2
  var adjustment = 0 - (radius/2)
  var textSize = radius*0.7
  var borderWidth = zoom*0.5

  const markerStyle = {
    color: 'rgba(153,85,0, 0.7)',
    width: `${radius}px`,
    height: `${radius}px`,
    lineHeight: `${radius}px`,
    fontSize: `${textSize}px`,
    textAlign: 'center',
    paddingTop: `${textSize/10}`,
    backgroundColor: 'rgba(119,187,187, 0.8)',
    borderRadius: '100%',
    border: `${borderWidth}px solid rgba(153,85,0, 0.7)`,
    position: 'relative',
    left: `${adjustment}px`,
    top: `${adjustment}px`,

  }
  return(
    <div className="circleThing" style={markerStyle}>
      &#9829;
    </div>

  )
}



class SimpleMap extends Component {
  constructor(){
    super()
    this.state = {
      lat: 0,
      lng: 0,
      zoom: 14,
      lats: 0.076,
      // handleClickDepth: 0,
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(args){
    var center = args.center.lat
    var lats = this.state.lats
    args.bounds.ne.lat ? lats = args.bounds.ne.lat - center : console.log("nope")
    this.setState({ ////////////////chaouvenwugo eg
      zoom: args.zoom,
      lats: lats,
    })
    // console.log("STATE HERE",this.state)
  }


  handleClick(evt){
    const lat = evt.lat
    const lng = evt.lng
    this.setState({ ///////////oeqhfoiweheg
      lat: lat,
      lng: lng,
    })
    return this.props.getCoords(this.state);
  }

  render() {
    // console.log("MAP2 STATE", this.state)
    return (
      <div className="mapContainer2">
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        onClick={this.handleClick}
        onChange={this.handleChange}
      >
        <AnyReactComponent
          lat={this.state.lat}
          lng={this.state.lng}
          text={''}
          zoom={this.state.zoom}
          lats={this.state.lats}
          rad={this.props.radius}
        />
      </GoogleMapReact>
    </div>
    );
  }
}

SimpleMap.defaultProps = {
  center: {lat: 41.888543, lng: -87.6376322},
  zoom: 10,
}

export default SimpleMap;
