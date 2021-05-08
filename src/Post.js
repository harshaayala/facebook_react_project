import React from 'react'
import './Post.css'
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Post({profileImage,message,timestamp,username,image}) {
    return (
        <div className="post">
        <div className="post_top">
            <Avatar className="post_avatar"/>
            <div className="post_info">
            <h3>{username}</h3>
            <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
            </div>
        </div>
        <div className="post_bottom">
                <p>{message}</p>
            </div>
        <div className="post_image">
            <img alt='' src={image}/>
        </div>
        <div className='post__options'>
        <div className='post__option'>
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className='post__option'>
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className='post__option'>
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className='post__option'>
          <AccountCircleIcon />
          <ExpandMoreOutlinedIcon />
        </div>
      </div>
            
        </div>
    )
}

export default Post
