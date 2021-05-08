import React, { Fragment } from 'react';
import './App.css';
import Header from './Header.js';
import Sidebar from './Sidebar.js'
import Widgets from './Widgets.js'
import Feed from './Feed.js'
import Login from './Login.js'
import  {useStateValue}   from './StateProvider.js';
function App() {
  const[{user}]=useStateValue();
  return (
    <div className="App">
    {!user?<Login/>:(
      <Fragment>
      <Header/>
      <div className="App_body">
      
      <Sidebar/>
      
      <Feed />

      <Widgets/>
      
    
      </div>
      </Fragment>
     
      )}
       
      </div>
    
  );
}
   
   

export default App;
