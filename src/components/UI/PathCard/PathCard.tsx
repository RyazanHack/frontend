import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Typography,
} from '@material-tailwind/react'
import { FC } from 'react'

interface PathCardProps {
	pathImage: string
	title: string
	description: string
}

export const PathCard: FC<PathCardProps> = ({
	pathImage,
	title,
	description,
}) => {
	return (
		<Card className='mt-6 w-96'>
			<CardHeader color='blue-gray' className='relative h-56'>
				<img src={pathImage} alt='card-image' />
			</CardHeader>
			<CardBody>
				<Typography variant='h5' color='blue-gray' className='mb-2'>
					{title}
				</Typography>
				<Typography>{description}</Typography>
			</CardBody>
			<CardFooter className='pt-0'>
				<Button>TRACK!</Button>
			</CardFooter>
		</Card>
	)
}
