import React from 'react'
import { Link } from 'react-router-dom'

const Login: React.FC = () => {
	return (
		<div>
			<form className="login-form" onSubmit={(e) => e.preventDefault()}>
				<div className="container">
					<h1>Forgot password</h1>

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

					<button className="btn-login" type="submit">
						Send new password
					</button>
				</div>

				<span className="login-info">
					You can also{' '}
					<Link className="registration" to="/registration">
						registrate
					</Link>
					. Already have an account?{' '}
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
