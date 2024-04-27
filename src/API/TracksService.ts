import axios from 'axios'
import { MAIN_API } from '../config'

export interface Track {
	title: string
	region: string
	points: string
}

export default class TracksService {
	private static API = MAIN_API

	public static async add_track(track: Track): Promise<void> {
		const token = localStorage["token"];

		let config = {
			headers: {
			Authorization: `Bearer ${token}`,
			'content-type': 'application/json',
			},
		}

		await axios.post(this.API + `/routes/add`, track, config)
	}
}
