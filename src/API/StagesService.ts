import axios from 'axios'
import { MAIN_API } from '../config'

export default class StagesService {
	private static API = MAIN_API

	public static async get_stage(): Promise<1 | 2> {
		const response = await axios.get(this.API + `/stage`)
		return response.data['current_stage']
	}
}
