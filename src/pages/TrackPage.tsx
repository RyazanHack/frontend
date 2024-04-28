import { Typography } from '@material-tailwind/react'
import { useCallback, useEffect, useState } from 'react'
import { PathCard } from '../components/UI/PathCard/PathCard'
import TracksService, { Track, TrackResp } from '../API/TracksService'
import { generatePath, useParams } from 'react-router-dom'
import RoutePaths from '../router/Routes'
import { getCrest } from '../utils/getRegions'
import Route from '../components/UI/Route/Route'

const TrackPage = () => {
	const {id} = useParams();

	const [path, setPath] = useState<TrackResp>()

	const getPaths = useCallback(async () => {
		const paths = await TracksService.get_one(parseInt(id!))

		setPath(paths)
	}, [])

	useEffect(() => {
		getPaths()
	}, [])

	return (
		<div className='flex flex-col'>
			<Route
				coords={path?.points || []}
				name={path?.title || ""}
				region={path?.region || ""}
			/>
		</div>
	)
}

export default TrackPage
