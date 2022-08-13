import { LINKEDIN_LOGO } from '../../Constants'

import SearchIcon from '@mui/icons-material/Search'
import HomeIcon from '@mui/icons-material/Home'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import ChatIcon from '@mui/icons-material/Chat'
import NotificationsIcon from '@mui/icons-material/Notifications'
import NavLink from './NavLink'

import './Topbar.scss'
import { logoutUser } from '../../Services/Auth.service'

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar__left">
        <img src={LINKEDIN_LOGO} alt="Linkedin" />
        <div className="topbar__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="topbar__right">
        <NavLink Icon={HomeIcon} title="Home" />
        <NavLink Icon={SupervisorAccountIcon} title="My Network" />
        <NavLink Icon={BusinessCenterIcon} title="Jobs" />
        <NavLink Icon={ChatIcon} title="Messaging" />
        <NavLink Icon={NotificationsIcon} title="Notifications" />
        <NavLink title="Logout" onClick={logoutUser} />
      </div>
    </div>
  )
}

export default Topbar
