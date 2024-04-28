import axios from 'axios'
import { MAIN_API } from '../config'

export default class YaGPTService {
	private static API = MAIN_API

	public static async get_description(region: string): Promise<string> {
		const response = await axios.get(this.API + `/yagpt?region=${region}`)
		return response.data
	}
}
