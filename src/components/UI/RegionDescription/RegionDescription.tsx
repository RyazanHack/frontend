import { Typography } from '@material-tailwind/react'
import { FC, useCallback, useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import YaGPTService from '../../../API/YaGPTService'

interface RegionDescriptionProps {
	countVotes: number
	title: string
}

const RegionDescription: FC<RegionDescriptionProps> = ({
	countVotes,
	title,
}) => {
	const [description, setDescription] = useState<string>("")

	const getDescription = useCallback(async () => {
		setDescription("Загрузка...")

		const description = await YaGPTService.get_description(title);

		setDescription(description)
	}, [title])

	useEffect(() => {
		getDescription();
	}, [title])

	return (
		<div className='bg-blue-gray-200 p-5 rounded'>
			<Typography variant='h2' color='blue-gray'>
				{title}
			</Typography>
			<Typography variant='h3'>
				Количество голосов: <span className='text-tg-accent'>{countVotes}</span>
			</Typography>

			<Typography variant='h4' color='blue-gray'>
				Бюджет региона:{' '}
				<span className='text-tg-accent'>
					{new Intl.NumberFormat('ru-RU', {
						style: 'currency',
						currency: 'RUB',
					}).format(countVotes * 100)}
				</span>
			</Typography>

			<Typography variant='h4' color='blue-gray'>
				{description}
			</Typography>
		</div>
	)
}

export default RegionDescription
