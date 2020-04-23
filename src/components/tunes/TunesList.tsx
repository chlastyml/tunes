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
		<TransitionGroup component="ul" className="tunes-list">
			{songs.map((song) => (
				<CSSTransition key={song.id} timeout={200} classNames="song">
					<li key={song.id}>
						<TunesSong song={song} />
					</li>
				</CSSTransition>
			))}
		</TransitionGroup>
	)
}

export default TunesList
