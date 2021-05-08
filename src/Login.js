import React from 'react'
import './Login.css'
import Button from '@material-ui/core/Button';
import {auth,provider} from './firebase.js'
import { useStateValue } from './StateProvider';
import {actionTypes} from './Reducer.js'
function Login() {
    const[{},dispatch]=useStateValue();

    const SignUp=()=>{
        auth 
           .signInWithPopup(provider)
           .then((result)=>{
               dispatch({
                   type:actionTypes.SET_USER,      /*this pushes the user data into data layer*/
                   user:result.user,
               })
           })
           .catch((error)=>alert(error.message))

    };
    return (
        <div className="login">
            <div className="login__image">
                <img alt='' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/800px-Facebook_f_logo_%282019%29.svg.png'/>
                <img src='https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg' alt=''/>

            </div>
            <Button className='signup_button' type="submit" onClick={SignUp}>SIGN-UP</Button>
        </div>
    )
}

export default Login
