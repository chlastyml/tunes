import React, { useRef } from 'react'
import axios from 'axios'

// styles
import './Login.scss'
import { Link } from 'react-router-dom'

const Login: React.FC = () => {
	const emailInput = useRef<HTMLInputElement>(null)
	const passwordInput = useRef<HTMLInputElement>(null)

	const loginHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		// console.log('emailInput.current?.value :>> ', emailInput.current?.value)
		// console.log('passwordInput.current?.value :>> ', passwordInput.current?.value)

		axios
			.get('http://localhost:3001/api/randomNumber', { withCredentials: true })
			.then((res) => {
				console.log('res :>> ', res.data)
			})
			.catch((err) => console.error(err))
	}

	return (
		<div>
			<form className="login-form" onSubmit={loginHandler}>
				<div className="container">
					<label>
						<b>Email</b>
					</label>
					<input
						className="login-input"
						type="text"
						placeholder="Enter Email"
						name="email"
						ref={emailInput}
						//required
					/>

					<label>
						<b>Password</b>
					</label>
					<input
						className="login-input"
						type="password"
						placeholder="Enter Password"
						ref={passwordInput}
						//required
					/>

					<button className="btn-login" type="submit">
						Login
					</button>
				</div>
				<span className="login-info">
					I am a idiot and I{' '}
					<Link className="registration" to="/forgotpassword">
						forgot my password
					</Link>{' '}
					or I havn't account and I wanna to{' '}
					<Link className="registration" to="/registration">
						registrate
					</Link>
					.
				</span>
			</form>
		</div>
	)
}

export default Login
