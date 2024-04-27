import { Typography } from '@material-tailwind/react'
import { useEffect, useState } from 'react'
import RegionsPicker from '../components/UI/RegionsPicker/RegionsPicker'
import { getRegions } from '../utils/getRegions'

const VotingPage = () => {
	const [regions] = useState(getRegions())
	const [currentRegion, setCurrentRegion] = useState<string>('')

	useEffect(() => {
		console.log(currentRegion)
	}, [currentRegion])

	return (
		<div className='flex flex-col mt-10'>
			<Typography className='m-5' variant='h1' color='blue-gray'>
				Регионы для голосования
			</Typography>
			<Typography className='m-5' variant='h3' color='gray'>
				Окружной этап
			</Typography>
			<RegionsPicker setExternalRegion={setCurrentRegion} className='m-5 max-w-[24em]'/>
		</div>
	)
}

export default VotingPage
