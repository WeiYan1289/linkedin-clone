import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HeaderOption from './HeaderOption';
import { useDispatch } from 'react-redux';
import { getAuth, signOut } from "firebase/auth";
import { logout } from "./features/userSlice";

function Header() {
  const dispatch = useDispatch();
  const auth = getAuth();
  const logoutOfApp = () => {
    dispatch(logout());  
    signOut(auth);
  }

  return (
    <div className="header">

        <div className="header__left">
            <img src={process.env.PUBLIC_URL + '/linkedin.png'}  alt="" />

            <div className="header__search">
                <SearchIcon />
                <input placeholder="Search" type="text" />
            </div>
        </div>

        <div className="header__right">
            <HeaderOption Icon={HomeIcon} title="Home" />
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
            <HeaderOption Icon={ChatIcon} title="Messaging" />
            <HeaderOption Icon={NotificationsIcon} title="Notifications" />
            <HeaderOption avatar={true} title="me" onClick={logoutOfApp} />
        </div>

    </div>
  )
}

export default Header