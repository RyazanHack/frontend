import { Typography } from '@material-tailwind/react'
import { FC } from 'react'
import { getCapital } from '../../../utils/getRegions'
import YMap from '../Map/Map'

interface RouteProps {
	region: string
	name: string
	coords: number[][]
}

export const Route: FC<RouteProps> = ({ region, coords, name }) => {
	return (
		<div>
			<Typography variant='h4' color='blue-gray'>
				{region}
			</Typography>
			<Typography
				variant='small'
				color='blue-gray'
				className='font-semibold mb-5'
			>
				{name}
			</Typography>
			<YMap center={getCapital(region)} coords={coords} readOnly />
		</div>
	)
}

export default Route
