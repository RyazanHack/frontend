import axios from 'axios'
import { MAIN_API } from '../config'

export interface Region {
	name: string
}

const parseResp = (data: any): Region[] => {
    const resp: Region[] = []

    for (const [_, value] of Object.entries(data)) {
        for(const [region, _] of value as any) {
            resp.push({
                name: region
            })
        }
    }

    return resp;
}

export default class RegionsService {
	private static API = MAIN_API

	public static async get_stage_1(): Promise<Region[]> {
		const response = await axios.get(this.API + `/votes/stage_one`)
		
        return parseResp(response.data)
	}

    public static async get_stage_2(): Promise<Region[]> {
		const response = await axios.get(this.API + `/votes/stage_two`)
		
        return parseResp(response.data)
	}
}
