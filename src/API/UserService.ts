import axios from 'axios'
import { MAIN_API } from '../config'

export interface SignupRequest {
	name: string,
  surname: string,
  phone: string,
  gender: "male" | "female",
  date_of_birth: string,
  email: string,
  password: string,
  region: string
}

export interface LoginRequest {
  phone: string,
  password: string,
}

export default class UserService {
	private static API = MAIN_API

	public static async signup(user: SignupRequest): Promise<void> {
		const response = await axios.post(this.API + '/user/register', user)
		const token = response.data.access_token;

    localStorage["token"] = token;
	}

  public static async login(user: LoginRequest): Promise<void> {
		const response = await axios.post(this.API + '/user/token', user)
		const token = response.data.access_token;

    localStorage["token"] = token;
	}
}
