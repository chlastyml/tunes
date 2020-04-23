import React, { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'

// styles
import styles from './TheNavigation.module.scss'

export default function TheNavigation(): ReactElement {
	return (
		<nav className={styles.navigation}>
			<NavLink activeClassName={styles.active} to="/" exact>
				Home
			</NavLink>
			<NavLink activeClassName={styles.active} to="/tunes">
				Tunes
			</NavLink>
			<NavLink activeClassName={styles.active} to="/about">
				About
			</NavLink>
		</nav>
	)
}
