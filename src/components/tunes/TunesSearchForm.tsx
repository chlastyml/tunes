import React, { FormEvent, ChangeEvent, useRef } from 'react'
import { debounce } from 'lodash-es'

// styles
import './TunesSearchForm.scss'

// props
interface Props {
	onSearch: (query: string) => void
}

const TunesSearchForm: React.FC<Props> = (props) => {
	const { onSearch } = props
	const searchInput = useRef<HTMLInputElement>(null)

	// submit form
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		searchForMusic()
	}

	// input element
	const handleInput = debounce((e: ChangeEvent<HTMLInputElement>) => {
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
					type="text"
					onChange={handleInput}
					autoFocus
				/>
			</form>
		</div>
	)
}

export default TunesSearchForm
