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
		const response = await axios.post(this.API + `/payment/vote/${countVotes}`, requestData, config)
		return response.data
	}

  public static async is_confirmed(key: string) {
		const response = await axios.get(this.API + `/payment/is_confirmed/${key}`)
		return response.data["is_confirmed"]
	}
}
