import axios from 'axios'
import { MAIN_API } from '../config'

interface CreatePaymentRequest {
	countVotes: number
}

export default class BillingService {
	private static API = MAIN_API

	public static async create(token: string, countVotes: number) {
		const requestData: CreatePaymentRequest = {
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
