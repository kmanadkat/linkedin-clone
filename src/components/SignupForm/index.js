import React from 'react'

const SignupForm = ({ handleFormToggle }) => {
	return (
		<div className='login__form'>
			<h1>Make the most of your professional life</h1>

			<form>
				<div className='login__form__container'>
					<label htmlFor='signupName'>Full Name</label>
					<input id='signupName' type='text' required />

					<label htmlFor='signupEmail'>Profile Photo URL (optional)</label>
					<input id='signupEmail' type='url' />

					<label htmlFor='signupEmail'>Email Id</label>
					<input id='signupEmail' type='email' required />

					<label htmlFor='signupPassword'>
						Password (6 characters or more)
					</label>
					<input id='signupPassword' type='password' required />

					<button type='submit'>Join now</button>
					<p>
						Already on LinkedIn? <span onClick={handleFormToggle}>Sign in</span>
					</p>
				</div>
			</form>
		</div>
	)
}

export default SignupForm
