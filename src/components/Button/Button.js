import React from 'react'
import './style.scss'

const Button = ({ label, type = 'button', state = 'idle' }) => {
	return (
		<button
			className={`btn btn-primary ${state}`}
			disabled={state !== 'idle'}
			type={type}
		>
			{state !== 'busy' && label}
			{state === 'busy' && <div className='loader'></div>}
		</button>
	)
}

export default Button
