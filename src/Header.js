import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { IconButton,Avatar } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StateProvider';
function Header() {
    const[{user},dispatch]=useStateValue();
    return (
        <div className='header'>
            <div className="header__left">
                <img 
                    className="header__image"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/800px-Facebook_f_logo_%282019%29.svg.png'
                    alt=''/>
                    <div className="header__searchbar">
                    <SearchIcon className="header__searchicon"/>
                 <input type="text" placeholder="Search" className="header__search" />  
                    </div>
                  
            </div>

            <div className="header__center">
                <div className="header__icons header__icons--active">
                    <HomeIcon fontSize="large"/>
                </div>
                <div className="header__icons">
                    <FlagIcon fontSize="large"/>
                </div>
                <div className="header__icons">
                    <SubscriptionsIcon fontSize="large"/>
                </div>
                <div className="header__icons">
                    <StorefrontIcon fontSize="large"/>
                </div>
                <div className="header__icons">
                    <SupervisedUserCircleIcon fontSize="large"/>
                </div>

            </div>


            <div className="header__right">

            <div className="header__avatar">
                <Avatar src={user.photoURL}/>
                <h4>{user.displayName}</h4>
            </div>
            <IconButton>
                <AddIcon/>
            </IconButton>

            <IconButton>
                <ForumIcon/>
            </IconButton>

            <IconButton>
                <NotificationsActiveIcon/>
            </IconButton>

            <IconButton>
                <ExpandMoreIcon/>
            </IconButton>




            </div>

          

        </div>
    )
}

export default Header
