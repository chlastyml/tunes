import React, { useMemo } from 'react'
import { truncate } from 'lodash-es'

// styles
import './TunesSong.scss'

// types
import Song from '../../types/Song'

// props
interface Props {
	song: Song
}

//component
const TunesSong: React.FC<Props> = (props) => {
	const { song } = props

	const shorten = (str: string, length = 55) => truncate(str, { length })

	const sogify = useMemo(
		() => (song: Song) => {
			const newTitle = song.artist + ' - ' + song.title
			return shorten(newTitle, 100)
		},
		// eslint-disable-next-line
		[song.artist, song.title]
	)

	// add new song
	const addSongHandler = () => {
		console.log('Pridan song: ' + song.artist + ' - ' + song.title)
	}

	// template
	return (
		<article className="song">
			<div className="inside">
				<h2>{sogify(song)}</h2>
				<div className="player">
					{song.artwork && <img src={song.artwork} alt="album art" />}

					<audio src={song.audioFile} controls />
				</div>
			</div>

			<footer className="meta">
				<span className="meta-album">{shorten(song.album)}</span>
				<span className="btn add-song-btn" onClick={() => addSongHandler()}>Pridat</span>
			</footer>
		</article>
	)
}

export default TunesSong
