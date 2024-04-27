import { Button, Typography } from '@material-tailwind/react'
import { useCallback, useEffect, useState } from 'react'
import RegionDescription from '../components/UI/RegionDescription/RegionDescription'
import RegionsPicker from '../components/UI/RegionsPicker/RegionsPicker'
import { getRegions } from '../utils/getRegions'

const VotingPage = () => {
	const [regions] = useState(getRegions())
	const [currentRegion, setCurrentRegion] = useState<string>('')

	const getCountVotes = useCallback(() => {
		console.log(currentRegion)
		return 12
	}, [currentRegion])

	const handleUpvote = useCallback(() => {
		console.log(currentRegion)
	}, [currentRegion])

	useEffect(() => {
		console.log(currentRegion)
	}, [currentRegion])

	return (
		<div className='m-5'>
			<Typography variant='h1' color='blue-gray'>
				Регионы для голосования
			</Typography>
			<Typography variant='h3' color='gray'>
				Окружной этап
			</Typography>
			<RegionsPicker setExternalRegion={setCurrentRegion} />
			{currentRegion && (
				<>
					<RegionDescription
						title={currentRegion}
						countVotes={getCountVotes()}
						description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam maxime dolores quae accusamus dolorum blanditiis, sunt velit, corporis molestias tenetur unde deleniti consequatur! Ad beatae qui et in doloremque quae.'
					/>
					<Button className='mt-5' onClick={handleUpvote}>
						Голосовать
					</Button>
				</>
			)}
		</div>
	)
}

export default VotingPage
