import {
	Button,
	Dialog,
	DialogBody,
	DialogFooter,
	DialogHeader,
	Input,
	Typography,
} from '@material-tailwind/react'
import { useCallback, useEffect, useState } from 'react'
import StagesService from '../API/StagesService'
import VotingService from '../API/VotingService'
import RegionDescription from '../components/UI/RegionDescription/RegionDescription'
import RegionsPicker from '../components/UI/RegionsPicker/RegionsPicker'
import { getRegions } from '../utils/getRegions'

const VotingPage = () => {
	const [regions] = useState(getRegions())
	const [currentRegion, setCurrentRegion] = useState<string>('')
	const [currentCountVotes, setCurrentCountVotes] = useState<number>(0)

	// Stage

	const [stage, setStage] = useState<1 | 2>(1)

	const getStage = useCallback(async () => {
		const stage = await StagesService.get_stage()
		setStage(stage)
	}, [])

	useEffect(() => {
		getStage()
	}, [])

	// Dialog
	const [open, setOpen] = useState(false)
	const [countVotes, setCountVotes] = useState<number>(0)
	const handleOpen = () => setOpen(!open)

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
		VotingService.upvote(currentRegion, stage, countVotes)
	}, [currentRegion, countVotes, stage])

	useEffect(() => {
		const interval = setInterval(() => {
			getCountVotes()
		}, 5000) // 5000 миллисекунд = 5 секунд

		return () => clearInterval(interval) // Очистка интервала при размонтировании компонента
	}, [getCountVotes])

	return (
		<>
			<Dialog open={open} handler={handleOpen}>
				<DialogHeader>Выберите количество голосов</DialogHeader>
				<DialogBody>
					<Input
						onChange={event => setCountVotes(parseInt(event.target.value))}
						size='lg'
						type='number'
						placeholder='Количество голосов'
						className=' !border-t-blue-gray-200 focus:!border-t-gray-900 mt-5'
						labelProps={{
							className: 'before:content-none after:content-none',
						}}
					/>
				</DialogBody>
				<DialogFooter>
					<Button
						variant='text'
						color='red'
						onClick={handleOpen}
						className='mr-1'
					>
						<span>Отменить</span>
					</Button>
					<Button variant='gradient' color='green' onClick={handleUpvote}>
						<span>Подтвердить</span>
					</Button>
				</DialogFooter>
			</Dialog>
			<div className='flex flex-col'>
				<Typography className='m-5' variant='h1' color='blue-gray'>
					Регионы для голосования
				</Typography>
				<Typography className='ml-5' variant='h3' color='red'>
					{stage === 1 ? 'Окружной этап' : 'Федеральный этап'}
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
						<Button className='mt-5' onClick={handleOpen}>
							Голосовать
						</Button>
					</div>
				)}
			</div>
		</>
	)
}

export default VotingPage
