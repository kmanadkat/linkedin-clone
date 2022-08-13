import { forwardRef, LegacyRef } from 'react'
import { Avatar } from '@mui/material'

import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'

import { Post as PostModel } from '../../Models/Post'
import InputOption from './InputOption'
import { getElapsedTime, hasUserLiked } from '../../Utils'

import './Post.scss'

interface PostProps {
  readonly post: PostModel
  reactToPost: (postId: string) => void
  readonly currentUser: string
}

const Post = forwardRef(
  (
    { post, reactToPost, currentUser }: PostProps,
    ref: LegacyRef<HTMLDivElement>
  ) => {
    const { displayName, subtitle, message, photoURL, createdAt, id, likes } =
      post
    const elapsedTime = getElapsedTime(createdAt?.seconds)
    const isPostLikeByUser = hasUserLiked(currentUser, likes)
    return (
      <div ref={ref} className="post">
        <div className="post__header">
          <Avatar className="post__avatar" src={photoURL}>
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

          {likes.length > 0 && (
            <div className="reactions">
              <ThumbUpIcon style={{ color: '#0a66c2' }} fontSize="inherit" />
              <span>{likes.length}</span>
            </div>
          )}
        </div>

        <div className="post__buttons">
          {!isPostLikeByUser && (
            <div onClick={() => reactToPost(id ?? '')}>
              <InputOption
                Icon={ThumbUpOutlinedIcon}
                title="Like"
                color={'gray'}
              />
            </div>
          )}
          {isPostLikeByUser && (
            <InputOption Icon={ThumbUpIcon} title="Liked" color={'#0a66c2'} />
          )}
          <InputOption Icon={SmsOutlinedIcon} title="Comment" color={'gray'} />
        </div>
      </div>
    )
  }
)

export default Post
