import FlipMove from 'react-flip-move'
import CreateIcon from '@mui/icons-material/Create'
import CropOriginalIcon from '@mui/icons-material/CropOriginal'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import DateRangeIcon from '@mui/icons-material/DateRange'
import WebOutlinedIcon from '@mui/icons-material/WebOutlined'

import InputOption from './InputOption'
import { Post as PostModel } from '../../Models/Post'

import './Feed.scss'
import Post from './Post'
import useFeedPost from '../../Hooks/useFeedPost'

const Feed = () => {
  const { newPostInput, setNewPostInput, sendPost, posts } = useFeedPost()
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              type="text"
              value={newPostInput}
              onChange={(e) => setNewPostInput(e.target.value)}
              placeholder="Start a post"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>

        <div className="feed__inputOptions">
          <InputOption title="Photo" Icon={CropOriginalIcon} color="#378fe9" />
          <InputOption title="Video" Icon={SubscriptionsIcon} color="#5f9b41" />
          <InputOption
            title="Audio Event"
            Icon={DateRangeIcon}
            color="#c37d16"
          />
          <InputOption
            title="Write article"
            Icon={WebOutlinedIcon}
            color="#e16745"
          />
        </div>
      </div>

      {/* Posts */}
      <FlipMove>
        {posts.map((post: PostModel) => (
          <Post key={post.id} post={post} />
        ))}
      </FlipMove>
    </div>
  )
}

export default Feed
