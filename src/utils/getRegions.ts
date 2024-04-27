import russianGeo from '../../public/russia.json'

interface Region {
	"aoguid": string,
  "name": string,
  "okato": string
}

const getRegions = () => {
	let regions: Region[] = []
	russianGeo.data.forEach(district => regions.push(district.areas))
	return regions
}
