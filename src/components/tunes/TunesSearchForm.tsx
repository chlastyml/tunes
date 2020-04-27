import React, { FormEvent, useRef } from 'react'
import { debounce } from 'lodash-es'

// styles
import './TunesSearchForm.scss'

// props
interface Props {
	onSearch: (query: string) => void
}

const TunesSearchForm: React.FC<Props> = ({ onSearch }) => {
	const searchInput = useRef<HTMLInputElement>(null)

	// submit form
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		searchForMusic()
	}

	// input element
	const handleInput = debounce(() => {
		searchForMusic()
	}, 500)

	// search for music
	const searchForMusic = () => {
		const searchString = searchInput.current?.value
		if (searchString) onSearch(searchString)
	}

	// template
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					className="search"
					ref={searchInput}
					placeholder="try write artist or song"
					type="text"
					onChange={handleInput}
					autoFocus
				/>
			</form>
		</div>
	)
}

export default TunesSearchForm
