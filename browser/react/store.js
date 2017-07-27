//CONTAINS BOTH REDUCER AND STORE

//IMPORTS FOR STORE
import {createStore, applyMiddleware} from 'redux';
// import rootReducer from './reducers/root-reducer';

import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

//IMPORTS FOR DISPATCHERS
import axios from 'axios';
import { browserHistory, hashHistory } from 'react-router';


//~~~~~~~~~~~~  ALL THE THINGS!!!!  ~~~~~~~~~~~~~//

// //CONSTANTS
//
const SET_SELECTED_CONVERSATION = 'SET_SELECTED_CONVERSATION'

const SET_MESSAGES = 'SET_MESSAGES'

const SET_NAV_BUTTONS = 'SET_NAV_BUTTONS'

const SET_CURRENT_USER = 'SET_CURRENT_USER'

const ADD_JOBTITLE = 'ADD_JOBTITLE'; //THIS IS PRETTY MUCH JUST FOR MANUALLY ADDING TO DB

const ADD_USER = 'ADD_USER';
const ADD_VOCATION = 'ADD_VOCATION';
const SET_DES_JOBS = 'SET_DES_JOBS';
const SET_JOBTITLES_LIST = 'SET_JOBTITLES_LIST'

const SELECTED_VOC = 'SET_SELECTED_VOC'




// const ADD_ARTICLE = 'ADD_ARTICLE';
// const LIST_ARTICLES = 'LIST_ARTICLES';
//
//


// //ACTION CREATORS

export const setSelectedConversation = function(bool, convoNum){
  return {
    type: SET_SELECTED_CONVERSATION,
    displayConversation: bool,
    selectedConversation: convoNum,
  }
}

const setMessages = function(messagesArr){
  return {
    type: SET_MESSAGES,
    messages: messagesArr,
  }
}

export const setNavButtons = function(buttonsArray){
  return {
    type: SET_NAV_BUTTONS,
    navigationButtons: buttonsArray,
  }
}



const setCurrentUser = function(user){
  return {
    type: SET_CURRENT_USER,
    user: user,
  }
}


const addJobtitle = function(newTitle){
  return {
    type: ADD_JOBTITLE,
    newTitle: newTitle,
  }
}


const addUser = function(user){
  return {
    type: ADD_USER,
    user: user
  }
}

const addVocation = function(vocation){
  return {
    type: ADD_VOCATION,
    vocation: vocation
  }
}

const setDesJobs = function(desJobs){
  return {
    type: SET_DES_JOBS,
    desJobs: desJobs
  }
}

const setJobtitlesList = function(jobtitlesList){
  return {
    type: SET_JOBTITLES_LIST,
    jobtitlesList: jobtitlesList,
  }
}

const selectedVoc = function(vocId){
  return {
    type: SELECTED_VOC,
    selectedVocId: vocId,
  }
}


//
// const addArticle = function(article){
// 	return {
// 		type: ADD_ARTICLE,
// 		article: article
// 	}
// }
//
// const listArticles = function(articles){
// 	return {
// 		type: LIST_ARTICLES,
// 		articles: articles
// 	}
// }
//

//DISPATCHERS  //this was BELOW the store & reducer before... might need to be there...
// export const postJobtitle = (newJobtitle) => {
//   return dispatch => {
//     return axios.post('/api/newJobtitle')
//     .then(res => {
//       dispatch(addJobtitle(res.data))
//     })
//   }
// }
//
// export const postUser = (user) => {
//   return dispatch => {
//     return axios.post('/api/newUser', user)
//     .then(res => {
//       dispatch(addUser(res.data))
//     })
//     .catch(next)
//   }
// }
//
// export const postVocation = (vocation) => {
//   return dispatch => {
//     return axios.post('/api/newVocation')
//     .then(res => {
//       dispatch(addVocation(res.data))
//     })
//     .catch(next)
//   }
// }
export const sendMessage = (newMessage, currentUserId) => {
  return dispatch => {
    // console.log("newMessage isss in store" , newMessage)
    return axios.post('/api/messages', newMessage)
    .then(res => {
      // console.log("NOW WE'RE HERE!!", res.data)
      dispatch(fetchMessages(currentUserId))
    })
    .catch(console.log)
  }
}




export const fetchMessages = (currentUserId) => {
  // console.log("Are we here now?? current user id", currentUserId)
  return dispatch => {
    return axios.get(`/api/messages/${currentUserId}`)
    .then(res => {
      dispatch(setMessages(res.data))
    })
    .catch(console.log)
  }
}


////NEED TO CREATE A ROOT REDUCER THAT CAN RESET STATE TO INITIAL STATE AFTER LOGOUT
////https://stackoverflow.com/questions/35622588/how-to-reset-the-state-of-a-redux-store
export const logoutUser = () => {
  return dispatch => {
    return axios.get('/logout')
    .then(res => {
      dispatch(setCurrentUser({}));
      dispatch(setNavButtons(["About", "Sign Up", "Search Jobs"]))
      hashHistory.push('/About')
    })
    .catch(console.log)
  }
}


export const fetchCurrentUser = (email, password) => {
  return dispatch => {
    return axios.post('/login', { email: email, password: password})
    .then(res => {
      if (!res.data.userName){
        return alert("This email & password combination isn't valid. Try again.")
      }
      dispatch(setCurrentUser(res.data))
      dispatch(setNavButtons(["About", "Log Out", "Search Jobs"]))
      hashHistory.push('/YourPage')
    })
    .catch(console.log)
  //   .then(newProduct => {
  //   dispatch(setProduct(newProduct))
  //   browserHistory.push(`/products/${newProduct.id}`)
  // })
  // .catch(console.log)
  }
}

export const fetchDesJobs = (desJobTitle) => {
  return dispatch => {
    // console.log('DESJOBTITLE:', desJobTitle);
    return axios.get('/api/desJobs', { params: { title: desJobTitle}})
    .then(res => {
      // console.log('is this the resdata?', res.data);
      dispatch(setDesJobs(res.data))
    })
    .catch(console.log)
  }
}

export const fetchJobtitlesList = () => {
  // console.log('IN FJTL DISPATCH IN STORE');
  return dispatch => {
    // console.log('IN RETURNED DISPATCH IN STORE');
    return axios.get('/api/allJobtitles')
    .then(res => {
      // console.log("res data in store",res.data);
      dispatch(setJobtitlesList(res.data))
      dispatch(setNavButtons(["About", "Log Out", "Your Page"]))
    })
    .catch(console.log)
  }
}

/////////////////////////////////////////////////////////THIS IS NOT WORKING... NOR REACHING SECOND CONSOLE.LOG
export const setSelectedVoc = function(vocId){
  return function(dispatch){
    // console.log("still in store dispatch")
    dispatch(selectedVoc(vocId))
  }
}

//
// //REDUCER
//

const initialState = {
  currentUser: {},
  vocations: [],
  desJobs: [],
  jobtitlesList: [],
  selectedVocId: '',
  navigationButtons: ["About", "Sign Up", "Search Jobs"],
  searchQuery: '',
  messages: [],
  displayConversation: false,
  selectedConversation: 0,
}


function reducer(state = initialState, action){

  const nextState = Object.assign({}, state);

  switch (action.type){
    case SET_SELECTED_CONVERSATION:
      nextState.displayConversation = action.displayConversation;
      nextState.selectedConversation = action.selectedConversation;
      break;
    case SET_MESSAGES:
      console.log("Now we're in the reducer!!! messages:", action.messages)
      nextState.messages = action.messages;
      break;
    case SET_NAV_BUTTONS:
      nextState.navigationButtons = action.navigationButtons;
      break;
    case SET_CURRENT_USER:
      nextState.currentUser = action.user;
      break;
    case ADD_JOBTITLE:
      nextState.jobtitlesList = [...state.jobtitlesList, action.newTitle];
      break;
    case ADD_USER:
      nextState.currentUser = action.user;
      break;
    case ADD_VOCATION:
      nextState.vocation = [...state.vocations, action.vocation];
      break;
    case SET_DES_JOBS:
      nextState.desJobs = action.desJobs;
      break;
    case SET_JOBTITLES_LIST:
      nextState.jobtitlesList = action.jobtitlesList;
      break;
    case SELECTED_VOC:
      nextState.selectedVocId = action.selectedVoc;
      break;
    default:
      return state;
  }
  console.log("NEXT STATE:", nextState)
  return nextState;
}
//EXAMPLE FROM WIKI-REACT PROJECT

// const initialState = {
// 	articles: [],
// 	selectedArticle: {},
// }
//
//
// export function reducer(state = initialState, action){
//
// 	const nextState = Object.assign({}, state);
//
// 	switch (action.type){
// 		case 'LIST_ARTICLES':
// 			nextState.articles = action.articles;
// 			nextState.selectedArticle = {};
// 			break;
// 		case 'ADD_ARTICLE':
// 			nextState.articles = [...state.articles, action.article];
// 			nextState.selectedArticle = action.article;
// 		default:
// 			return state;
// 	}
// 	return nextState;
// }
//

//STORE

export default createStore(reducer, applyMiddleware(thunkMiddleware));
  // reducer,
  // applyMiddleware(
  //   thunkMiddleware,
  //   createLogger({collapsed: true})
  // )
// );
