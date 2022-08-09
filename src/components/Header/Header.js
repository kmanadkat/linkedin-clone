import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import './Header.scss'
import HeaderOption from './HeaderOption'

import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { LINKEDIN_LOGO, PROFILE_URL } from '../../utils/constants'
import logout from '../../services/auth/logout'

function Header() {
	return (
		<div className='header'>
			<div className='header__left'>
				<img src={LINKEDIN_LOGO} alt='Linkedin' />
				<div className='header__search'>
					<SearchIcon />
					<input type='text' placeholder='Search' />
				</div>
			</div>

			<div className='header__right'>
				<HeaderOption Icon={HomeIcon} title='Home' />
				<HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
				<HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
				<HeaderOption Icon={ChatIcon} title='Messaging' />
				<HeaderOption Icon={NotificationsIcon} title='Notifications' />
				<HeaderOption avatar={PROFILE_URL} title='Logout' onClick={logout} />
			</div>
		</div>
	)
}

export default Header
