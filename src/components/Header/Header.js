import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import './Header.scss'
import HeaderOption from './HeaderOption'

import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationsIcon from '@material-ui/icons/Notifications'


function Header() {
  return (
    <div className='header'>
      
      <div className="header__left">
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
        <HeaderOption Icon={ChatIcon} title='Messaging' />
        <HeaderOption Icon={NotificationsIcon} title='Notifications' />
        <HeaderOption avatar='https://media-exp1.licdn.com/dms/image/C4E03AQGJ42BH2pZnZQ/profile-displayphoto-shrink_400_400/0/1644599247644?e=1665619200&v=beta&t=M8saeVId6Pxl21ySK7jQqOJVUJ6I4vMG7mD9u-Kb6tE' title='' />
      </div>
    </div>
  )
}

export default Header