import React from 'react'
import { Link } from 'react-router-dom'

const Login: React.FC = () => {
	return (
		<div>
			<form className="login-form" onSubmit={(e) => e.preventDefault()}>
				<div className="container">
					<h1>Registration</h1>

					<label>
						<b>Email</b>
					</label>
					<input
						className="login-input"
						type="text"
						placeholder="Enter Email"
						name="email"
						required
					/>

					<label>
						<b>Password</b>
					</label>
					<input
						className="login-input"
						type="password"
						placeholder="Enter Password"
						name="psw"
						required
					/>

					<label>
						<b>Repeat Password</b>
					</label>
					<input
						className="login-input"
						type="password"
						placeholder="Repeat Password"
						name="psw-repeat"
						required
					/>

					<button className="btn-login" type="submit">
						Register
					</button>
				</div>

				<span className="login-info">
					Already have an account?{' '}
					<Link className="registration" to="/login">
						Sign in
					</Link>
					.
				</span>
			</form>
		</div>
	)
}

export default Login
