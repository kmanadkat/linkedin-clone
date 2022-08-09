import { WIDGETS } from '../../utils/constants'
import WidgetItem from './WidgetItem'
import './Widgets.scss'

const Widgets = () => {
	return (
		<div className='widgets'>
			<h3>LinkedIn News</h3>

			{WIDGETS.map((widget) => (
				<WidgetItem {...widget} />
			))}
		</div>
	)
}

export default Widgets
