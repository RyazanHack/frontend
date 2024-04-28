import { Typography } from '@material-tailwind/react'
import { useCallback, useEffect, useState } from 'react'
import { PathCard } from '../components/UI/PathCard/PathCard'
import TracksService, { Track } from '../API/TracksService'
import { generatePath } from 'react-router-dom'
import RoutePaths from '../router/Routes'
import { getCrest } from '../utils/getRegions'

const PathPage = () => {
	const [paths, setPaths] = useState<(Track & {
		id: string
	})[]>()


	const getPaths = useCallback(async () => {
		const paths = await TracksService.get_all()

		setPaths(paths)
	}, [])

	useEffect(() => {
		getPaths()
	}, [])

	return (
		<div className='flex flex-col'>
			<Typography className='m-5' variant='h1' color='blue-gray'>
				✅ Верифицированные маршруты
			</Typography>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-5'>
				{paths?.map((path, index) => {
					return (
						<div key={index} className='flex justify-center'>
							<PathCard
								pathImage={getCrest(path.region)}
								title={path.title}
								description={path.region}
								path={generatePath(RoutePaths.PATH, {
									id: path.id
								})}
							/>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default PathPage
