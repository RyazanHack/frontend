import axios from 'axios'
import { MAIN_API } from '../config'

export interface SignupRequest {
	name: string
	surname: string
	phone: string
	gender: 'male' | 'female'
	date_of_birth: string
	email: string
	password: string
	region: string
}

export interface LoginRequest {
	phone: string
	password: string
}

export interface User {
	name: string
	surname: string
	phone: string
	gender: 'male' | 'female'
	date_of_birth: string
	email: string
	region: string
	unused_votes: number
}

export default class UserService {
	private static API = MAIN_API

	public static async signup(user: SignupRequest): Promise<void> {
		const response = await axios.post(this.API + '/user/register', user)
		const token = response.data.access_token

		localStorage['token'] = token
	}

	public static async info(): Promise<User> {
		const token = localStorage['token']

		let config = {
			headers: {
				Authorization: `Bearer ${token}`,
				'content-type': 'application/json',
			},
		}

		const response = await axios.post(this.API + '/user/self', {}, config)

		return response.data
	}

	public static async login(user: LoginRequest): Promise<void> {
		const response = await axios.post(this.API + '/user/token', user)
		const token = response.data.access_token

		localStorage['token'] = token
	}

	public static async getCountTravels() {
		const token = localStorage['token']
		let config = {
			headers: {
				Authorization: `Bearer ${token}`,
				'content-type': 'application/json',
			},
		}
		const response = await axios.get(this.API + `/travel`, config)
		return response?.data?.length || 0
	}
}
