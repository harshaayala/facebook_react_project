import React, { useState,useEffect} from "react";
import Button from '@material-ui/core/Button';
import {FormControl,InputLabel,Input,FormHelperText } from '@material-ui/core';
import "./App.css";
import Message from "./Message";


  
function App() {
  const [input, setInput] = useState("");
  const [msg, setMsgs] = useState([{
    username:'qazi',text:'hello'
  }]);
  const [userName,setUserName]=useState("");

  useEffect(() => {
    
   setUserName(prompt("please enter your name"));
    
  }, [])

  const send = (event) => {
    setMsgs([...msg,{username:userName,text:input}]);
    setInput("");
    event.preventDefault();
  };

  console.log(input);
  console.log(msg);
  return (
    <div className="App">
      <h1>hello {userName}</h1>
      <form>
      <FormControl>
     <InputLabel >Enter the message..</InputLabel>
     <Input value={input} onChange={(event) => setInput(event.target.value)} />
     <Button type="submit" 
       variant="contained"
        color="primary"
        disabled={!input}
       
      onClick={send}>
        send{" "}
      </Button>
      </FormControl>
      
      
      {msg.map((msgs) => (
        <Message username={userName} message={msgs} text={msgs.text}
                  />
      ))}
      </form>
    </div>
  );
}

export default App;
