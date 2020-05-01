import React, { useMemo, useState } from 'react'
import { truncate } from 'lodash-es'
import axios from 'axios'

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
	const [added, setAdded] = useState(true)

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
		axios
			.post('http://localhost:3001/api/song/add', song, { withCredentials: true })
			.then((res) => {
				console.log('res :>> ', res.data)
				setAdded(false)
			})
			.catch((err) => console.error(err))
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
				{added && (
					<span className="btn add-song-btn" onClick={() => addSongHandler()}>
						Pridat
					</span>
				)}
			</footer>
		</article>
	)
}

export default TunesSong
