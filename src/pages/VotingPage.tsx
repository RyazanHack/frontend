import { Option, Select, Typography } from '@material-tailwind/react'
import { useEffect, useState } from 'react'
import { getRegions } from '../utils/getRegions'

const VotingPage = () => {
	const [regions, setRegions] = useState(getRegions())

	useEffect(() => {
		console.log(regions)
	}, [regions])

	return (
		<div>
			<Typography className='m-5' variant='h1' color='blue-gray'>
				Регионы для голосования
			</Typography>
			<Typography className='m-5' variant='h3' color='gray'>
				Окружной этап
			</Typography>
			<div className='w-72'>
				<Select label='Select Version'>
					<Option>Material Tailwind HTML</Option>
					<Option>Material Tailwind React</Option>
					<Option>Material Tailwind Vue</Option>
					<Option>Material Tailwind Angular</Option>
					<Option>Material Tailwind Svelte</Option>
				</Select>
			</div>
		</div>
	)
}

export default VotingPage
