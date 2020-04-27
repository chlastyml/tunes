import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

// styles
import './TunesList.scss'

// types
import Song from '../../types/Song'

// childrens
import TunesSong from './TunesSong'

// props
interface Props {
	songs: Song[]
}

// component
const TunesList: React.FC<Props> = (props) => {
	const { songs } = props

	// template
	return (
		<div>
			<TransitionGroup component="ul" className="tunes-list">
				{songs.map((song) => (
					<CSSTransition key={song.externId} timeout={200} classNames="song">
						<li key={song.externId}>
							<TunesSong song={song} />
						</li>
					</CSSTransition>
				))}
			</TransitionGroup>
			<h1 style={{ display: songs.length !== 0 ? 'none' : 'inline' }}>NOT FOUND</h1>
		</div>
	)
}

export default TunesList
