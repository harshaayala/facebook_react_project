import React from 'react'
import './Sidebar.css'

import Sidebaroption from './Sidebaroption.js'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import GroupIcon from '@material-ui/icons/Group';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import { useStateValue } from './StateProvider';
function Sidebar() {
    const[{user},dispatch]=useStateValue();
    return (
        <div className="sidebar">
        <Sidebaroption src={user.photoURL} text={user.displayName}/>
        <Sidebaroption Icon={LocalHospitalIcon} text='Covid Hospitalization Center'/>
        <Sidebaroption Icon={GroupIcon} text='Friends'/>
        <Sidebaroption Icon={SupervisedUserCircleIcon} text='Groups'/>
        <Sidebaroption Icon={ YouTubeIcon} text='Videos'/>
        <Sidebaroption Icon={EventAvailableIcon} text='Events'/>

            
        </div>
    )
}

export default Sidebar
