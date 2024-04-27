import axios from 'axios'
import { MAIN_API } from '../config'

interface UpvoteRequest {
	countVotes: number
	region: string
}

export default class VotingService {
	private static API = MAIN_API

	public static async upvote(
		token: string,
		region: string,
		countVotes: number
	) {
		const requestData: UpvoteRequest = {
			region,
			countVotes,
		}
		const response = await axios.post(this.API + '/upvote', requestData, {
			headers: {
				token: token,
			},
		})
		return response.data
	}
}
