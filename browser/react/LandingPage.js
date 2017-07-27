import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import ReactCardFlip from 'react-card-flip';
import Nav from './Nav';
import LoginComponent from './LoginComponent'
import { CSSTransitionGroup } from 'react-transition-group' // ES6
import { Animate } from 'react-move'


//IMPORT THE NECESSARY DISPATCHERS FROM THE STORE here


const mapStateToProps = (state) => {
  return {};
}


const mapDispatchToProps = {
    // postUser: postUser,
		// postVocation: postVocation
}


export class LandingPage extends React.Component{

  render(){

    return (
      <div className="onLandingPage">
        <LogoFlip />
      </div>
    )
  }
}


class LogoFlip extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped1: false,
      isFlipped2: false,
      doneFlipping: false,
      nowGoAway: false,
      animationsDone: false,
    };
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        isFlipped1: true,
      })
    }, 300);
    setTimeout(() => {
      this.setState({
        isFlipped2: true,
      })
    }, 500);
    setTimeout(() => {
      this.setState({
        isFlipped1: false,
      })
    }, 700);
    setTimeout(() => {
      this.setState({
        isFlipped2: false,
      })
    }, 900);
    setTimeout(() => {
      this.setState({
        doneFlipping: true,
      })
    }, 1100);
    setTimeout(() => {
      this.setState({
        nowGoAway: true,
      })
    }, 1300);
    setTimeout(() => {
      this.setState({
        animationsDone: true,
      })
    }, 1500);
  }

  // handleClick(e) {
  //   e.preventDefault();
  //   this.setState({ isFlipped: !this.state.isFlipped });
  // }

  render() {
    return (
      <div>
        <ReactCardFlip isFlipped={this.state.isFlipped1}>
          <FrontComponent1 key="front">
            This is the front of the card. This text is not visible.
          </FrontComponent1>
          <BackComponent1 key="back">
            This is the back of the card. This text is not visible.
          </BackComponent1>
        </ReactCardFlip>
        <ReactCardFlip isFlipped={this.state.isFlipped2}>
          <FrontComponent2 key="front">
            This is the front of the card. This text is not visible.
          </FrontComponent2>
          <BackComponent2 key="back">
            This is the back of the card. This text is not visible.
          </BackComponent2>
        </ReactCardFlip>

        <div className="sloganContainer">
        { this.state.doneFlipping && !this.state.nowGoAway &&
          <CSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={2000}
            transitionEnter={false}
            transitionLeave={false}>
            <h2 className="landingFThe">screw the commute.</h2>
          </CSSTransitionGroup>
        }
        { this.state.nowGoAway && !this.state.animationsDone &&
          <CSSTransitionGroup
            transitionName="example2"
            transitionAppear={true}
            transitionAppearTimeout={5000}
            transitionEnter={false}
            transitionLeave={false}>
            <h2 className="landingFTheItalic">screw the commute.</h2>
          </CSSTransitionGroup>
        }
        { this.state.animationsDone &&
          <CSSTransitionGroup
            transitionName="example3"
            transitionAppear={true}
            transitionAppearTimeout={5000}
            transitionEnter={false}
            transitionLeave={false}>
            <LoginComponent />
          </CSSTransitionGroup>
        }
      </div>
    </div>
    )
  }
}

function FrontComponent1(props){
  return (
    <div className="panelContainer1">
      <span className="titleLandingLeft">Commute</span>
    </div>
  )
}

function BackComponent1(props){
  return (
    <div className="panelContainer1">
      <span className="titleLandingLeftFlipped">Commute</span>
    </div>
  )
}

function FrontComponent2(props){
  return (
    <div className="panelContainer">
      <span className="titleLandingRight">Swap</span>
    </div>
  )
}

function BackComponent2(props){
  return (
    <div className="panelContainer">
      <span className="titleLandingRightFlipped">Swap</span>
    </div>
  )
}



export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)
