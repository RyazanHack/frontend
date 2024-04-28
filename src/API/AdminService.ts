import axios from 'axios'
import { MAIN_API } from '../config'

export interface RegionStat {
	name: string,
	votes: number,
	percent: number
}

export default class AdminService {
	private static API = MAIN_API

	public static async getStats() {
    	const token = localStorage["token"];

		let config = {
			headers: {
				Authorization: `Bearer ${token}`,
				'content-type': 'application/json',
			},
		}

		var response = await axios.get(this.API + `/statistic/users_registered/`, config)
		const users = response.data["users_registered"]

		var response = await axios.get(this.API + `/statistic/number_purchased_votes/`, config)
		const purchased = response.data["votes_purchased"]

		return {
			users,
			purchased
		}
	}

	public static async nextStage(current: number) {
    	const token = localStorage["token"];

		let config = {
			headers: {
				Authorization: `Bearer ${token}`,
				'content-type': 'application/json',
			},
		}

		await axios.patch(this.API + `/stage?stage=${current + 1}`, {}, config)
	}

	public static async getRegions(stage: 1 | 2 | 3) {
    	const token = localStorage["token"];

		let config = {
			headers: {
				Authorization: `Bearer ${token}`,
				'content-type': 'application/json',
			},
		}

		const response = await axios.get(this.API + `/statistic/top_region/${stage}`, config)

		console.log(response)
		const regions = response.data

		const resp: RegionStat[] = []

		for (const region of regions) {
			resp.push({
				name: region[0],
				votes: region[1],
				percent: region[2]
			})
		}

		return resp;
	}
}
