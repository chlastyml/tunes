import React, { useEffect } from 'react'
import './assets/App.scss'

import { Route, Switch } from 'react-router-dom'
import { useCookies } from 'react-cookie'

// types
import { Page } from './types/Page'

// Components
import TheNavigation from './components/TheNavigation'

// Views
import Home from './views/Home'
import Tunes from './views/Tunes'
import Guess from './views/Guess'
import About from './views/About'
import Login from './views/Login/Login'
import Registration from './views/Login/Registration'
import Forgotpassword from './views/Login/Forgotpassword'

function App() {
	const [cookies, setCookie] = useCookies(['count'])

	const setCookieCount = (val: number) => {
		setCookie('count', val, { path: '/', sameSite: true })
		// console.log('set new cookies.count', val)
	}

	const countHandler = () => {
		setCookieCount(Number.parseInt(cookies.count) + 1)
	}

	useEffect(() => {
		if (cookies.count === undefined) {
			setCookie('count', 0, { path: '/', sameSite: true })
		}
	}, [cookies, setCookie])

	const pages: Page[] = [
		{
			path: '/',
			component: Home,
			title: 'Home',
			exact: true,
		},
		{
			path: '/tunes',
			component: Tunes,
			title: 'Tunes',
		},
		{
			path: '/guess/:id',
			component: Guess,
			title: 'Guess',
			exact: false,
		},
		{
			path: '/about',
			component: About,
			title: 'About',
		},
		{
			path: '/login',
			component: Login,
			title: 'Login',
		},
	]

	return (
		<div onClick={() => countHandler()} className="App App-header">
			<header>
				<TheNavigation pages={pages} />
			</header>
			<main className="content">
				<Switch>
					{pages.map((page, index) => (
						<Route
							key={index}
							path={page.path}
							component={page.component}
							exact={page.exact}
						/>
					))}
					{/* <Route path="/" component={Home} exact />
					<Route path="/tunes" component={Tunes} />
					<Route path="/guess/:id" component={Guess} />
					<Route path="/about" component={About} />
					<Route path="/login" component={Login} /> */}

					<Route path="/registration" component={Registration} />
					<Route path="/forgotpassword" component={Forgotpassword} />
					<Route render={() => <h1>Error 404</h1>} />
				</Switch>
			</main>
			<footer className="footer">
				{/* <img src={logo} className="App-logo" alt="logo" /> */}
			</footer>
		</div>
	)
}

export default App
