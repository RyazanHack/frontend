import axios from 'axios'
import { MAIN_API } from '../config'

interface CreatePaymentRequest {
	countVotes: number
}

export default class BillingService {
	private static API = MAIN_API

	public static async buy(countVotes: number) {
    const token = localStorage["token"];

		let config = {
			headers: {
				Authorization: `Bearer ${token}`,
				'content-type': 'application/json',
			},
		}

		const requestData: CreatePaymentRequest = {
			countVotes,
		}
		const response = await axios.post(this.API + `/payment/payment/${countVotes}`, requestData, config)
		return response.data
	}
}
