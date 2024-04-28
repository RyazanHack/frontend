import axios from 'axios'
import { MAIN_API } from '../config'

export interface Track {
	title: string
	region: string
	points: string
}

export interface TrackResp {
	title: string
	region: string
	points: number[][]
}

export default class TracksService {
	private static API = MAIN_API

	public static async add_track(track: Track): Promise<void> {
		const token = localStorage['token']

		let config = {
			headers: {
				Authorization: `Bearer ${token}`,
				'content-type': 'application/json',
			},
		}

		await axios.post(this.API + `/routes/add`, track, config)
	}

	public static async get_all(): Promise<
		(Track & {
			id: string
		})[]
	> {
		const response = await axios.get(this.API + `/routes/all`)
		return response.data
	}

	public static async get_one(id: number): Promise<TrackResp> {
		const response = await axios.get(this.API + `/routes?route_id=${id}`)
		return response.data
	}
}
