import './Feed.scss'
import CreateIcon from '@material-ui/icons/Create'
import InputOption from './InputOption'
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import DateRangeIcon from '@material-ui/icons/DateRange';
import WebOutlinedIcon from '@material-ui/icons/WebOutlined';
import Post from './Post';
import { POSTS } from '../../utils/constants';
import { useState } from 'react';

const Feed = () => {
  const [posts, setPosts] = useState(POSTS)

  return (
    <div className='feed'>
      <div className="feed__inputContainer">
        
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" placeholder='Start a post' />
            <button type='submit'>Send</button>
          </form>
        </div>

        <div className="feed__inputOptions">
          <InputOption title="Photo" Icon={CropOriginalIcon} color="#378fe9" />
          <InputOption title="Video" Icon={SubscriptionsIcon} color="#5f9b41" />
          <InputOption title="Audio Event" Icon={DateRangeIcon} color="#c37d16" />
          <InputOption title="Write article" Icon={WebOutlinedIcon} color="#e16745" />
        </div>
      </div>

      {/* Posts */}
      {posts.map((post) => <Post key={post.id} {...post} />)}

    </div>
  )
}

export default Feed