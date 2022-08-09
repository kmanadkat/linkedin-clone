import { Avatar } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import { BANNER } from '../../utils/constants'
import './Sidebar.scss'

const Sidebar = () => {
	const { photoURL, displayName, email } = useSelector(selectUser)
	const recentItem = (topic) => (
		<div className='sidebar__recentItem'>
			<span className='sidebar__hash'>#</span>
			<p>{topic}</p>
		</div>
	)

	return (
		<div className='sidebar'>
			<div className='sidebar__top'>
				<img src={BANNER} alt='' />
				<Avatar src={photoURL} className='sidebar__avatar' sizes=''>
					{displayName[0]}
				</Avatar>
				<h2>{displayName}</h2>
				<h4>{email}</h4>

				<div className='sidebar__stats'>
					<div className='sidebar__stat'>
						<p>Who's viewed your profile</p>
						<p className='sidebar__statnumber'>220</p>
					</div>
					<div className='sidebar__stat'>
						<p>Impressions of your posts</p>
						<p className='sidebar__statnumber'>1,711</p>
					</div>
				</div>
			</div>

			<div className='sidebar__bottom'>
				<p>Recent</p>
				{recentItem('React Js')}
				{recentItem('Javascript Learning Group')}
				{recentItem('microsoftLearn')}
				{recentItem('design')}
				{recentItem('developer')}
			</div>
		</div>
	)
}

export default Sidebar
