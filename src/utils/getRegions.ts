import russianGeo from '../../public/russia.json'

interface Region {
	aoguid: string
	name: string
	okato: string
}

export const getRegions = () => {
	let regions: Region[] = []
	russianGeo.data.forEach(district => {
		district.areas.forEach(area => regions.push(area))
	})
	return regions
}
