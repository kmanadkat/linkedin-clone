import { Avatar } from '@material-ui/core'
import InputOption from './InputOption'
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendIcon from '@material-ui/icons/Send';
import './Post.scss'

const Post = ({ name, description, message, photoUrl}) => {
  return (
    <div className='post'>
      <div className="post__header">
        <Avatar className='post__avatar' src={photoUrl} />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

    <div className="post__body">
      <p>{message}</p>
    </div>

    <div className="post__buttons">
      <InputOption Icon={ThumbUpOutlinedIcon} title="Like" color={'gray'} />
      <InputOption Icon={SmsOutlinedIcon} title="Comment" color={'gray'} />
      <InputOption Icon={ShareOutlinedIcon} title="Share" color={'gray'} />
      <InputOption Icon={SendIcon} title="Send" color={'gray'} />
    </div>

    </div>
  )
}

export default Post
