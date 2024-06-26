import russianGeo from '../../public/russia.json'

export interface Region {
	name: string
	capital: string,
	crest: string
}

let regions: Region[] = []
russianGeo.data.forEach(district => {
	district.areas.forEach(area => regions.push(area))
})

export const getRegions = () => {
	return regions
}

export const getCapital = (region: string) => {
	return (regions.filter(reg => reg.name === region)[0] || [{
		capital: ""
	}]).capital
}

export const getCrest = (region: string) => {
	return (regions.filter(reg => reg.name === region)[0] || [{
		crest: ""
	}]).crest
}