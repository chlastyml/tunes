import axios from 'axios'

// constants
const baseUrl = 'http://localhost:3001/api'

/** Get song for guessing from API */
export async function getSong(id: string) {
	const res = await axios.get(`${baseUrl}/song/${id}`, {
		withCredentials: true,
	})
	return { ...res.data, id: res.data._id }
}

export async function getRandomSong() {
	const res = await axios.get(`${baseUrl}/song/random`, {
		withCredentials: true,
	})
	return { ...res.data, id: res.data._id }
}

export async function sendGuessSong(id: string, title: string) {
	const res = await axios.post(
		`${baseUrl}/song/guess/${id}`,
		{ title },
		{ withCredentials: true }
	)
	return res.data
}
