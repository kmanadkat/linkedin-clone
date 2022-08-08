import React from 'react'

const LoginForm = ({ handleFormToggle }) => {
	return (
		<div className='login__form'>
			<h1>Stay updated on your professional world</h1>

			<form>
				<div className='login__form__container'>
					<label htmlFor='email'>Email Id</label>
					<input id='email' type='email' required />

					<label htmlFor='password'>Password</label>
					<input id='password' type='password' required />

					<button type='submit'>Sign in</button>
					<p>
						New to LinkedIn? <span onClick={handleFormToggle}>Join now</span>
					</p>
				</div>
			</form>
		</div>
	)
}

export default LoginForm
