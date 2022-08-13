import { WIDGETS } from '../../Constants'
import './Widgets.scss'

const Widgets = () => {
  return (
    <div className="widgets">
      <h3>LinkedIn News</h3>

      {WIDGETS.map(({ url, title, subtitle, key }) => (
        <div
          key={key}
          className="widgets__item"
          onClick={() => window.open(url, '_blank')}>
          <div className="dot"></div>
          <div className="widgets__item--info">
            <h3>{title}</h3>
            <p>{subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Widgets
