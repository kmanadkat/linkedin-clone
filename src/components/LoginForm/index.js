import React from 'react'

const LoginForm = ({
	handleFormToggle,
	handleInput,
	email,
	password,
	handleSubmit,
}) => {
	return (
		<div className='login__form'>
			<h1>Stay updated on your professional world</h1>

			<form onSubmit={handleSubmit}>
				<div className='login__form__container'>
					<label htmlFor='email'>Email Id</label>
					<input
						id='email'
						value={email}
						type='email'
						onChange={handleInput}
						required
					/>

					<label htmlFor='password'>Password</label>
					<input
						id='password'
						value={password}
						type='password'
						onChange={handleInput}
						required
					/>

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
