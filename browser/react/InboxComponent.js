import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { fetchMessages, setSelectedConversation } from './store'
import { sortBy, groupBy, orderGrouped } from './utils'



const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    messages: state.messages,
  };
}


const mapDispatchToProps = {

  fetchMessages: fetchMessages,
  setSelectedConversation: setSelectedConversation,
    // postUser: postUser,
		// postVocation: postVocation
}


class InboxComponent extends React.Component {
  constructor(){
    super()

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(convoNum){
    console.log("handleclick works.")
    this.props.setSelectedConversation(true, convoNum);
  }

  componentDidMount(){
    this.props.fetchMessages(this.props.currentUser.id);
  }

  // componentWillUpdate(){
  //   this.props.fetchMessages(this.props.currentUser.id);
  // }

  render(){

    let orderedMessages = sortBy(this.props.messages, 'timestamp')
    // console.log(orderedMessages)

    let conversationsByConvId = groupBy(orderedMessages, 'convoNum')

    let conversationsByTimestamp = orderGrouped(conversationsByConvId, 'timestamp')

    let currentUserr = this.props.currentUser;

    let handleClick = this.handleClick;

    return(
      <div className="inboxWrapper">
        <div>
          <h2>{currentUserr.userName}'s Messages:</h2>
        </div>

        {
          this.props.messages.length > 1 && Object.keys(conversationsByTimestamp).reverse().map(function(conv){
            let indivConv = conversationsByTimestamp[conv]
            let otherPerson = indivConv[0].sender === currentUserr.userName ? indivConv[0].recipient : indivConv[0].sender;
            let latestMessage = indivConv[indivConv.length - 1]
            let messageSnippet = latestMessage.content.length > 40 ? latestMessage.content.slice(0, 40) + '...' : latestMessage.content
            console.log("message is characters long")
            let youSentIt = indivConv[indivConv.length - 1].sender === currentUserr.userName ? '(You)...' : null;
            return (
              <div className="convWrapper" key={conv} onClick={() => handleClick(latestMessage.convoNum)}>
                <div className="convNameWrapper">
                  <p><span>{otherPerson}</span></p>
                </div>
                <div className="lastMessageWrapper">
                  <p><span>{youSentIt}{messageSnippet}</span></p>
                </div>
                <hr />
              </div>
            )
          })
        }



      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InboxComponent)
