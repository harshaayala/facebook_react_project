import React,{useState,useEffect} from 'react'
import './Feed.css'
import Stories from './Stories.js';
import MessageSender from './MessageSender.js'
import Post from './Post.js'
import db from './firebase.js'
function Feed() {
    const [posts,setPosts]=useState([]);
     
    useEffect(() => {
        db.collection('posts').onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc)=>({
            id:doc.id,
            data:doc.data()
        })))
        );
      
    }, [])

    return (
        <div className='feed'>

        <Stories/>
        <MessageSender/>
        {posts.map((post )=>(
            <Post 
            key={post.id}
            profileImage={post.data.profileImage}
            message={post.data.message}
            username={post.data.username}
            image={post.data.image}
            timestamp={post.data.timestamp}/>
        )) }
        </div>
    );
        
};

export default Feed
