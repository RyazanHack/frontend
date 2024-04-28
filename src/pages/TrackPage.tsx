import { Button, Typography } from '@material-tailwind/react'
import { useCallback, useEffect, useState } from 'react'
import { PathCard } from '../components/UI/PathCard/PathCard'
import TracksService, { Track, TrackResp } from '../API/TracksService'
import { generatePath, useParams } from 'react-router-dom'
import RoutePaths from '../router/Routes'
import { getCrest } from '../utils/getRegions'
import Route from '../components/UI/Route/Route'
import { ImageDialog } from '../components/UI/ImageDialog/ImageDialog'

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
			<Button className='max-w-[24em]'>TRACK!</Button>
			<input type="file" className="file-input file-input-bordered file-input-lg w-full max-w-xs" />

		</div>
	)
}

export default TrackPage
