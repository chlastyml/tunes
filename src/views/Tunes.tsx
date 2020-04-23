import React, { ReactElement, useState } from 'react'
import axios from 'axios'

// childrens
import TunesList from '../components/tunes/TunesList'
import TunesSearchForm from '../components/tunes/TunesSearchForm'

// types
import SongFromITunes from '../types/SongFromITunes'
import Song from '../types/Song'

// component
export default function Tunes(): ReactElement {
	// state
	const [songs, setSongs] = useState<Song[]>([])

	const handleSearch = (searchQuery: string) => {
		axios
			.get(
				`https://itunes.apple.com/search?term=${encodeURI(
					searchQuery
				)}&entity=musicTrack&limit=5`,
				{
					headers: {
						// 'Access-Control-Allow-Origin': '*',
						// 'Content-Type': 'application/json',
					},
				}
			)
			.then((res) => {
				const iTunesSongs = res.data.results
					.filter((song: any) => song.kind === 'song')
					.map((song: any) => extractData(song))
				setSongs(iTunesSongs)
			})
	}

	const extractData = ({
		trackId: id,
		trackName: title,
		artistName: artist,
		previewUrl: audioFile,
		artworkUrl100: artwork,
		collectionName: album,
	}: SongFromITunes) => {
		return { id, title, artist, audioFile, artwork, album } as Song
	}

	// template
	return (
		<div>
			<h1>Tunes</h1>
			<TunesSearchForm onSearch={handleSearch} />
			<TunesList songs={songs} />
		</div>
	)
}
