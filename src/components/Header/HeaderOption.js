import './HeaderOption.scss'
import { Avatar } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'

const HeaderOption = ({ Icon, title, onClick }) => {
	const { photoURL, displayName } = useSelector(selectUser)
	return (
		<div className='headerOption' onClick={onClick}>
			{Icon && <Icon className='headerOption__icon' />}
			{!Icon && (
				<Avatar className='headerOption__icon' src={photoURL}>
					{displayName?.[0]}
				</Avatar>
			)}
			<h3 className='headerOption__title'>{title}</h3>
		</div>
	)
}

export default HeaderOption
