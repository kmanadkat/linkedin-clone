import './WidgetItem.scss'

const WidgetItem = ({ title, subtitle, url }) => {
	return (
		<div className='widgets__item' onClick={() => window.open(url, '_blank')}>
			<div className='dot'></div>
			<div className='widgets__item--info'>
				<h3>{title}</h3>
				<p>{subtitle}</p>
			</div>
		</div>
	)
}

export default WidgetItem
