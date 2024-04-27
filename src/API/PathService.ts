import { MAIN_API } from '../config'

interface CreatePathRequest {
	countVotes: number
}

export default class PathService {
	private static API = MAIN_API

	public static async create() {
		// const token = localStorage["token"];
		// let config = {
		// 	headers: {
		// 		Authorization: `Bearer ${token}`,
		// 		'content-type': 'application/json',
		// 	},
		// }
		// const requestData: CreatePaymentRequest = {
		// 	countVotes,
		// }
		// const response = await axios.post(this.API + `/payment/payment/${countVotes}`, requestData, config)
		// return response.data
	}
}
