import React from 'react'
import { NavLink } from 'react-router-dom'

// types
import { Page } from '../types/Page'

// styles
import styles from './TheNavigation.module.scss'

// props
interface Props {
	pages: Page[]
}

// component
const TheNavigation: React.FC<Props> = ({ pages }) => {
	// template
	return (
		<nav className={styles.navigation}>
			{pages.map((page, index) => (
				<NavLink key={index} activeClassName={styles.active} to={page.path} exact>{page.title}</NavLink>
			))}
		</nav>
	)
}

export default TheNavigation
