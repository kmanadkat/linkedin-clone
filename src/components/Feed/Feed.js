import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import FlipMove from 'react-flip-move'
import CreateIcon from '@material-ui/icons/Create'
import CropOriginalIcon from '@material-ui/icons/CropOriginal'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import DateRangeIcon from '@material-ui/icons/DateRange'
import WebOutlinedIcon from '@material-ui/icons/WebOutlined'

import InputOption from './InputOption'
import Post from './Post'

import { fetchRealtimeData } from '../../services/posts/retrieveData'
import { addPost } from '../../services/posts/addData'
import { selectUser } from '../../features/userSlice'
import './Feed.scss'

const Feed = () => {
  const { displayName, email, photoURL } = useSelector(selectUser)
  const [newPostInput, setNewPostInput] = useState('')
  const [posts, setPosts] = useState([])
  const unsubscribeRef = useRef()

  // Listen For Realtime Data Changes
  useEffect(() => {
    unsubscribeRef.current = fetchRealtimeData(setPosts)
    return () => {
      if (unsubscribeRef.current) {
        unsubscribeRef.current()
      }
    }
  }, [])

  const sendPost = (event) => {
    event.preventDefault()
    addPost({
      displayName,
      subtitle: email,
      message: newPostInput,
      photoUrl: photoURL,
    })
    setNewPostInput('')
  }

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
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </FlipMove>
    </div>
  )
}

export default Feed
