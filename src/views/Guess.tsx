import React, { useEffect, useState, useRef } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import * as API from '../API'

// types
import { SongGuess } from '../types/SongGuess'
import GuessSongForm from '../components/guess/GuessSongForm'

// props
interface Props extends RouteComponentProps<{ id: string }> {}

// component
const Guess: React.FC<Props> = (props) => {
	const [song, setSong] = useState<SongGuess>()
	const [isCorrect, setCorrect] = useState<string>('')

	const initComponent = (song: SongGuess) => {
		console.log('INIT: ', song.id)
		setSong(song)
		setCorrect('')
	}

	useEffect(() => {
		// get song or random song
		API.getSong(props.match.params.id)
			.then((song: SongGuess) => {
				initComponent(song)
			})
			.catch((err) => {
				if (err.response.status === 404) {
					setTimeout(redirectOnNew, 10)
				} else {
					console.error(err)
				}
			})
	}, [props.match.params.id, props.history])

	const redirectOnNew = () => {
		API.getRandomSong().then((newSong: SongGuess) => {
			if (song && newSong.id === song.id) return redirectOnNew()
			props.history.push(`/guess/${newSong.id}`)
			initComponent(newSong)
		})
	}

	// handle me if I have true
	function onGuessHandler(isCorrect: boolean) {
		console.log('isCorrect', isCorrect)
		setCorrect(isCorrect ? 'yes' : 'no')
	}

	// template
	return (
		<article className="song">
			<div className="inside" style={{ textAlign: 'center' }}>
				<h1>
					Guess song{isCorrect && isCorrect === 'yes' && <span>👍</span>}
					{isCorrect && isCorrect === 'no' && <span>👎</span>}
				</h1>
				<div className="player" style={{ display: 'block' }}>
					<audio src={song?.audioFile} onEnded={redirectOnNew} controls autoPlay />
				</div>
				{song && <GuessSongForm song={song} onGuess={onGuessHandler}></GuessSongForm>}
			</div>
		</article>
	)
}

export default Guess
