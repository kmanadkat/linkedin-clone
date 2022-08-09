import { Avatar } from '@material-ui/core'
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined'
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined'
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined'
import SendIcon from '@material-ui/icons/Send'
import { formatDistance } from 'date-fns'
import InputOption from './InputOption'
import './Post.scss'

const Post = ({ name, description, message, photoUrl, createdAt }) => {
	let elapsedDuration = ''
	if (createdAt?.seconds) {
		elapsedDuration = formatDistance(
			new Date(createdAt.seconds * 1000),
			new Date(),
			{ includeSeconds: true }
		)
	}
	return (
		<div className='post'>
			<div className='post__header'>
				<Avatar className='post__avatar' src={photoUrl}>
					{name[0]}
				</Avatar>
				<div className='post__info'>
					<h2>{name}</h2>
					<p>{description}</p>
				</div>
				{elapsedDuration && <span>{elapsedDuration} ago</span>}
			</div>

			<div className='post__body'>
				<p>{message}</p>
			</div>

			<div className='post__buttons'>
				<InputOption Icon={ThumbUpOutlinedIcon} title='Like' color={'gray'} />
				<InputOption Icon={SmsOutlinedIcon} title='Comment' color={'gray'} />
				<InputOption Icon={ShareOutlinedIcon} title='Share' color={'gray'} />
				<InputOption Icon={SendIcon} title='Send' color={'gray'} />
			</div>
		</div>
	)
}

export default Post
