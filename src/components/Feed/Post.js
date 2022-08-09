import { forwardRef } from 'react'
import { Avatar } from '@material-ui/core'
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined'
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined'

import { getElapsedTime } from '../../utils'
import InputOption from './InputOption'
import './Post.scss'

const Post = forwardRef(
	({ name, description, message, photoUrl, createdAt }, ref) => {
		const elapsedTime = getElapsedTime(createdAt)
		return (
			<div ref={ref} className='post'>
				<div className='post__header'>
					<Avatar className='post__avatar' src={photoUrl}>
						{name[0]}
					</Avatar>
					<div className='post__info'>
						<h2>{name}</h2>
						<p>{description}</p>
					</div>
					{elapsedTime && <span>{elapsedTime} ago</span>}
				</div>

				<div className='post__body'>
					<p>{message}</p>
				</div>

				<div className='post__buttons'>
					<InputOption Icon={ThumbUpOutlinedIcon} title='Like' color={'gray'} />
					<InputOption Icon={SmsOutlinedIcon} title='Comment' color={'gray'} />
				</div>
			</div>
		)
	}
)

export default Post
