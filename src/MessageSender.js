import React,{useState} from 'react'
import './MessageSender.css'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { Avatar } from '@material-ui/core';
import { useStateValue } from './StateProvider';
import db from './firebase.js';
import firebase from "firebase";
function MessageSender() {
    const[InputValue,SetInputValue]=useState('');
    const[ImageURL,SetImageURL]=useState('');
    const[{user}]=useStateValue();

    const submit=e =>{
      e.preventDefault();
      SetInputValue('');
      SetImageURL('');
      db.collection('posts').add({
        message: InputValue,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        profilePic: user.photoURL,
        username: user.displayName,
        image: ImageURL,
      });
       
    }
    return (
        <div className="MessageSender">

        <div className="MessageSender__top">

        <Avatar src={user.photoURL}/>
        <form>
          
          <input value={InputValue} onChange={(e)=>(SetInputValue(e.target.value))} type="text" placeholder={`whats going on? ${user.displayName}`}/>
          <input value={ImageURL} onChange={(e)=>(SetImageURL(e.target.value))} placeholder={'image URL(optional'}/>
          <button onClick={submit}type="submit">hidden submit</button>

        </form>

        </div>

        <div className="MessageSender__bottom">

        <div className="MessageSender__options">
          <VideocamIcon style={{color:'red'}} />
          <h4>Live Video</h4>
        </div>
        <div className="MessageSender__options">
          <PhotoLibraryIcon style={{color:'green'}} />
          <h4>Photo/Video</h4>
        </div>
        <div className="MessageSender__options">
          <InsertEmoticonIcon style={{color:'yellow'}} />
          <h4>Feeling/Activity</h4>
        </div>

        </div>

        
            
        </div>
    )
}

export default MessageSender
