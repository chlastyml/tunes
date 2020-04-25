import React, { useEffect } from 'react'
import './assets/App.scss'

import { Route, Switch } from 'react-router-dom'
import { useCookies } from 'react-cookie'

// Components
import TheNavigation from './components/TheNavigation'

// Views
import Home from './views/Home'
import Tunes from './views/Tunes'
import About from './views/About'

function App() {
	const [cookies, setCookie] = useCookies(['count'])

	const setCookieCount = (val: number) => {
		setCookie('count', val, { path: '/', sameSite: true })
		console.log('set new cookies.count', val)
	}

	const countHandler = () => {
		setCookieCount(Number.parseInt(cookies.count) + 1)
	}

	useEffect(() => {
		if (cookies.count === undefined) {
			setCookie('count', 0, { path: '/', sameSite: true })
		}
	}, [cookies, setCookie])

	return (
		<div onClick={() => countHandler()} className="App App-header">
			<header>
				<TheNavigation />
			</header>
			<main className="content">
				<Switch>
					<Route path="/" component={Home} exact />
					<Route path="/tunes" component={Tunes} />
					<Route path="/about" component={About} />
				</Switch>
			</main>
			<footer className="footer">
				{/* <img src={logo} className="App-logo" alt="logo" /> */}
			</footer>
		</div>
	)
}

export default App
