import axios from 'axios'
import { MAIN_API } from '../config'

interface GetCountVotesRequest {
	region: string
	stage: 1 | 2
}

interface UpvoteRequest {
	countVotes: number
	region: string
}

interface GetCountVotesResponse {
	region: string
	stage: 1 | 2
	votes: number
}

export default class VotingService {
	private static API = MAIN_API

	public static async getCountVotes(
		region: string,
		stage: 1 | 2
	): Promise<GetCountVotesResponse> {
		const requestData: GetCountVotesRequest = {
			region,
			stage,
		}
		const response = await axios.post(this.API + `/votes`, requestData)
		return response.data
	}

	public static async upvote(region: string, stage: 1 | 2) {
		const token = localStorage["token"];

		let config = {
			headers: {
				Authorization: `Bearer ${token}`,
				'content-type': 'application/json',
			},
		}
		const requestData: UpvoteRequest = {
			region,
			stage,
		}
		const response = await axios.post(
			this.API + `/votes/upvote`,
			requestData,
			config
		)
		return response.data
	}
}
