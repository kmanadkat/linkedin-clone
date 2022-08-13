import Topbar from './Topbar'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widgets from './Widgets'

import './index.scss'

const Home = () => {
  return (
    <div className="home">
      <Topbar />

      <div className="home__body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </div>
  )
}

export default Home
