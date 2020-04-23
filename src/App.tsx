import React from 'react'
import './assets/App.scss'

import { Route, Switch } from 'react-router-dom'

// Components
import TheNavigation from './components/TheNavigation'

// Views
import Home from './views/Home'
import Tunes from './views/Tunes'
import About from './views/About'

function App() {
	return (
		<div className="App App-header">
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
