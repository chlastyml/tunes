import React, { FormEvent, useRef, useEffect } from 'react'
import * as API from '../../API'

// types
import { SongGuess } from '../../types/SongGuess'

// props
interface Props {
	song: SongGuess
	onGuess: (isCorrect: boolean) => void
}

const GuessSongForm: React.FC<Props> = ({ song, onGuess }) => {
	const guessInput = useRef<HTMLInputElement>(null)

	useEffect(() => {
		if (guessInput.current) guessInput.current.value = ''
		guessInput.current?.focus()
	}, [song])

	// submit form
	const guessHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		guessMusic()
	}

	// guess music
	const guessMusic = () => {
		const guessNameSong = guessInput.current?.value
		if (guessNameSong) {
			API.sendGuessSong(song.id, guessNameSong).then((result) => onGuess(result.status))
		}
	}

	// template
	return (
		<form onSubmit={guessHandler}>
			<input
				ref={guessInput}
				style={{ textAlign: 'center' }}
				className="login-input"
				type="text"
				placeholder="Enter song name"
				autoFocus
			></input>
		</form>
	)
}

export default GuessSongForm
