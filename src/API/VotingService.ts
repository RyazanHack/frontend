import axios from 'axios'
import { MAIN_API } from '../config'

interface GetCountVotesRequest {
	region: string
	stage: 1 | 2 | 3
}

interface UpvoteRequest {
	region: string
	stage: 1 | 2 | 3
	amount: number
}

interface GetCountVotesResponse {
	region: string
	stage: 1 | 2 | 3
	votes: number
}

export default class VotingService {
	private static API = MAIN_API

	public static async getCountVotes(
		region: string,
		stage: 1 | 2 | 3
	): Promise<GetCountVotesResponse> {
		const requestData: GetCountVotesRequest = {
			region,
			stage,
		}
		const response = await axios.post(this.API + `/votes`, requestData)
		return response.data
	}

	public static async upvote(region: string, stage: 1 | 2 | 3, amount: number) {
		const token = localStorage['token']
		let config = {
			headers: {
				Authorization: `Bearer ${token}`,
				'content-type': 'application/json',
			},
		}
		const requestData: UpvoteRequest = {
			region,
			stage,
			amount,
		}
		const response = await axios
			.post(this.API + `/votes/upvote`, requestData, config)
			.catch(e => alert('Недостаточно голосов'))
		return response
	}
}
