import { Avatar } from '@material-ui/core'
import { BANNER, PROFILE_URL } from '../../utils/constants'
import './Sidebar.scss'

const Sidebar = () => {

  const recentItem = (topic) => (
    <div className='sidebar__recentItem'>
      <span className='sidebar__hash'>#</span>
      <p>{topic}</p>
    </div>
  )

  return (
    <div className='sidebar'>
      <div className="sidebar__top">

        <img src={BANNER} alt="" />
        <Avatar src={PROFILE_URL} className="sidebar__avatar" sizes=''  />
        <h2>Krupesh Anadkat</h2>
        <h4>Software Engineer @ Byjus</h4>

        <div className="sidebar__stats">
          <div className="sidebar__stat">
            <p>Who's viewed your profile</p>
            <p className='sidebar__statnumber'>220</p>
          </div>
          <div className="sidebar__stat">
            <p>Impressions of your posts</p>
            <p className='sidebar__statnumber'>1,711</p>
          </div>
        </div>
      </div>


      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("React Js")}
        {recentItem("Javascript Learning Group")}
        {recentItem("microsoftLearn")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>

    </div>
  )
}

export default Sidebar