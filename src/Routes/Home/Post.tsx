import { forwardRef, LegacyRef } from 'react'
import { Avatar } from '@mui/material'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined'

import { Post as PostModel } from '../../Models/Post'
import InputOption from './InputOption'
import { getElapsedTime } from '../../Utils'

import './Post.scss'

interface PostProps {
  readonly post: PostModel
}

const Post = forwardRef((props: PostProps, ref: LegacyRef<HTMLDivElement>) => {
  const { displayName, subtitle, message, photoUrl, createdAt } = props.post
  const elapsedTime = getElapsedTime(createdAt?.seconds)

  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar className="post__avatar" src={photoUrl}>
          {displayName[0]}
        </Avatar>
        <div className="post__info">
          <h2>{displayName}</h2>
          <p>{subtitle}</p>
        </div>
        {elapsedTime && <span>{elapsedTime} ago</span>}
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption Icon={ThumbUpOutlinedIcon} title="Like" color={'gray'} />
        <InputOption Icon={SmsOutlinedIcon} title="Comment" color={'gray'} />
      </div>
    </div>
  )
})

export default Post
