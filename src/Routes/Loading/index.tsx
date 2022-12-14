import { LINKEDIN_LOGO_FULL } from '../../Constants'

import './index.scss'

const Loading = () => {
  return (
    <div className="loading">
      <img src={LINKEDIN_LOGO_FULL} alt="Linkedin Logo" />

      <div className="loading__loader">
        <div className="loading__bluebar"></div>
      </div>
    </div>
  )
}

export default Loading
