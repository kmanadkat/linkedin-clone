import React from 'react'
import Button from '../Button/Button'

const SignupForm = ({
	handleFormToggle,
	handleInput,
	email,
	password,
	fullName,
	profilePicUrl,
	handleSubmit,
	buttonState,
}) => {
	return (
		<div className='login__form'>
			<h1>Make the most of your professional life</h1>

			<form autoComplete='off' onSubmit={handleSubmit}>
				<div className='login__form__container'>
					<label htmlFor='fullName'>Full Name</label>
					<input
						value={fullName}
						id='fullName'
						type='text'
						onChange={handleInput}
						required
					/>

					<label htmlFor='profilePicUrl'>Profile Photo URL (optional)</label>
					<input
						value={profilePicUrl}
						id='profilePicUrl'
						type='text'
						onChange={handleInput}
					/>

					<label htmlFor='email'>Email Id</label>
					<input
						value={email}
						id='email'
						type='email'
						onChange={handleInput}
						required
					/>

					<label htmlFor='password'>Password (6 characters or more)</label>
					<input
						value={password}
						id='password'
						type='password'
						onChange={handleInput}
						required
					/>

					<Button type='submit' state={buttonState} label='Join now' />
					<p>
						Already on LinkedIn? <span onClick={handleFormToggle}>Sign in</span>
					</p>
				</div>
			</form>
		</div>
	)
}

export default SignupForm
