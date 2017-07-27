import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { sortBy, filterBy, groupBy, orderGrouped } from './utils';
import store, { sendMessage, fetchMessages } from './store';





const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.currentUser,
    messages: state.messages,
    displayConversation: state.displayConversation,
    selectedConversation: state.selectedConversation,
  };
}


const mapDispatchToProps = {
  sendMessage: sendMessage,
}


class ConvoBox extends React.Component{

  constructor(){
    super();
    this.state = {
      sender: '',
      recipient: '',
      content: '',
      timestamp: 0,
      convoNum: 0,
      senderStatus: 'sent',
      recipientStatus: 'unread',
      setMessagesAgain: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.setMessagesWNewMessage = this.setMessagesWNewMessage.bind(this)

  }

  // handleChange(evt){
  //   console.log("In Handlechange!!!!")
  //   let newText = evt.target.value;
  //   this.setState({
  //     content: newText,
  //     sender: this.props.currentUser.id,
  //   })
  //   console.log("this.state.content isssss",this.state.content)
  // }

  // handleSubmit(evt){
  //   evt.preventDefault();
  //   // console.log("rec conv", recipient, convoNum)
  //   this.setState({
  //     sender: this.props.currentUser.userName,
  //     recipient: recipient,
  //     timestamp: Date.now(),
  //     convoNum: convoNum,
  //   })
  //   console.log("YOUR NEW MESSAGE!!!!", this.state)
  // }

  handleChange(recipient, convoNum, currentUserId){
    return evt => {
      let newText = evt.target.value;
        this.setState({
          content: newText,
          recipient: recipient,
          convoNum: convoNum,
          sender: currentUserId,
          timestamp: Date.now() + '',
        })
        // console.log("this.state isssss",this.state)
    }
  }

  handleSubmit(recipient, convoNum, currentUserId) {
    return evt => {
      evt.preventDefault()
      // console.log( "reeeciipietntt",recipient, convoNum, currentUserId)
      // this.setState({
      //   // recipient: recipient,
      //   // convoNum: convoNum,
      //   // sender: currentUserId,
      // })
      this.props.sendMessage(this.state, currentUserId);
      this.setState({
        content: '',
        setMessagesAgain: true,
      })
      console.log("This should say true now", this.state.setMessagesAgain)
    }
  }

  // setMessagesWNewMessage(currentUserId){
  //   console.log("IS THIS WORKING?")
  //   store.dispatch(fetchMessages(currentUserId))
  //   this.setState({
  //     setMessagesAgain: false,
  //   })
  // }

  componentDidUpdate(){
    console.log("IS THIS WORKING?", this.props.currentUser.id)
    if (this.state.setMessagesAgain === true){
      setTimeout(()=>{
        console.log("yay we're here")
        store.dispatch(fetchMessages(this.props.currentUser.id))
        this.setState({
          setMessagesAgain: false,
        })
      }, 500)
    }
    setTimeout(()=>{
      store.dispatch(fetchMessages(this.props.currentUser.id))
    }, 10000)
  }


  render(){

    // console.log("messages from store!!!!", this.props.messages)


    let convoNum = this.props.selectedConversation;

    let filteredMessagesByConvo = filterBy(this.props.messages, 'convoNum', this.props.selectedConversation)
    let orderedMessages = sortBy(filteredMessagesByConvo, 'timestamp').reverse()
    let currentUser = this.props.currentUser;
    let firstMessage = orderedMessages[0]

    let recipient = '';

    if (firstMessage !== undefined){
      if(firstMessage.recipient === currentUser.userName){
        recipient = firstMessage.sender;
      } else {
        recipient = firstMessage.recipient;
      }
    }

    // if (this.state.setMessagesAgain){
    //   this.setMessagesWNewMessage(currentUser.id)
    //   this.setState({
    //     setMessagesAgain: false,
    //   })
    // }

    ////AT SOME POINT NEED TO INCLUDE LOGIC THAT KEEPS A BLANK MESSAGE FROM SENDING

    return(
      <div >
        { this.props.displayConversation &&
          <div className="convoBoxContainer">
            <div className="convoBoxShadow">
              <div className="convoBox">
                {
                  this.props.displayConversation && orderedMessages.map(function(message){
                    return (
                      <div key={message.id} className="shouldbeInFront">
                        <div className="relativePositioner">
                          {
                            message.sender === currentUser.userName ?
                            <div className="shouldBeBlockYou"><div className="userMessage"><p >{message.content}</p></div><span className="chatterYou">You</span></div>
                            :
                            <div className="shouldBeBlockOther"><span className="chatterOther">{message.sender}</span><div className="otherUserMessage"><p >{message.content}</p></div></div>
                          }
                        </div>
                      </div>
                    )
                  })
                }
                <div className="sendMessageContainer">
                  <form className="sendMessageForm" onSubmit={this.handleSubmit(recipient, convoNum, currentUser.id)}>
                    <textarea className="messageText" value={this.state.content} onChange={this.handleChange(recipient, convoNum, currentUser.id)} />
                    <input type="submit" value="Send" className="messageSendButton"/>
                  </form>
                </div>
              </div>
            </div>
          </div>
        }
        {
          // this.props.displayConversation &&
          // <div>
          //   <form onSubmit={() => this.handleSubmit(recipient, convoNum)}>
          //     <textarea value={this.state.content} onChange={this.handleChange} />
          //     <input type="submit" value="Submit" />
          //   </form>
          // </div>
        }

      </div>
    )
  }
}








export default connect(mapStateToProps, mapDispatchToProps)(ConvoBox)
