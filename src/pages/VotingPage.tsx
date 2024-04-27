import { Button, Typography } from '@material-tailwind/react'
import { useCallback, useEffect, useState } from 'react'
import VotingService from '../API/VotingService'
import RegionDescription from '../components/UI/RegionDescription/RegionDescription'
import RegionsPicker from '../components/UI/RegionsPicker/RegionsPicker'
import { getRegions } from '../utils/getRegions'

const VotingPage = () => {
	const [regions] = useState(getRegions())
	const [currentRegion, setCurrentRegion] = useState<string>('')
	const [currentCountVotes, setCurrentCountVotes] = useState<number>(0)

	const getCountVotes = useCallback(async () => {
		setCurrentCountVotes(
			(await VotingService.getCountVotes(currentRegion, 1)).votes
		)
	}, [currentRegion])

	useEffect(() => {
		getCountVotes()
	}, [currentRegion])

	const handleUpvote = useCallback(() => {
		// TODO: Change to localstorage
		VotingService.upvote(
			currentRegion,
			1
		)
		console.log(currentRegion)
	}, [currentRegion])

	useEffect(() => {
		console.log(currentRegion)
	}, [currentRegion])

	return (
		<div className='flex flex-col mt-10'>
			<Typography className='m-5' variant='h1' color='blue-gray'>
				Регионы для голосования
			</Typography>
			<Typography className='ml-5' variant='h3' color='gray'>
				Окружной этап
			</Typography>
			<RegionsPicker
				setExternalRegion={setCurrentRegion}
				className='m-5 max-w-[24em]'
			/>
			{currentRegion && (
				<div className='m-5'>
					<RegionDescription
						title={currentRegion}
						countVotes={currentCountVotes}
						description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam maxime dolores quae accusamus dolorum blanditiis, sunt velit, corporis molestias tenetur unde deleniti consequatur! Ad beatae qui et in doloremque quae.'
					/>
					<Button className='mt-5' onClick={handleUpvote}>
						Голосовать
					</Button>
				</div>
			)}
		</div>
	)
}

export default VotingPage
