import React, { useState, useEffect } from 'react'

// styles
import './Home.scss'

// assets
import logo from '../assets/logo.svg'

let count = 0
let isUp = true
function proccess(max: number) {
	if (isUp && count >= max) isUp = false
	else if (count <= 0) isUp = true
	if (isUp) count++
	else count--
	return count
}

let timeout: NodeJS.Timer = setTimeout(() => {}, 300000)
const Home: React.FC = () => {
	const [title, setTitle] = useState('React, whee')

	useEffect(() => {
		clearTimeout(timeout)
		timeout = setTimeout(() => {
			setTitle('React, whee' + '.'.repeat(proccess(5)))
		}, 150)
		return (() => clearTimeout(timeout))
	})

	return (
		<div className="home">
			<img className="logo" src={logo} alt="react logo" />

			<h1 className="noselect" onClick={() => setTitle((prevTitle) => prevTitle + '!')}>
				{title}
			</h1>

			<p>
				Hot singles in your area. <br />
				Hotter react in your&nbsp;
				<a href="https://reactjs.org/docs" target="_blank" rel="noopener noreferrer">
					documentation
				</a>
				.
			</p>
		</div>
	)
}

export default Home
