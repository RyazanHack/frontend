import { Button } from '@material-tailwind/react'
import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import TracksService, { TrackResp } from '../API/TracksService'
import Route from '../components/UI/Route/Route'

const TrackPage = () => {
	const { id } = useParams()

	const [path, setPath] = useState<TrackResp>()

	const getPaths = useCallback(async () => {
		const paths = await TracksService.get_one(parseInt(id!))

		setPath(paths)
	}, [])

	useEffect(() => {
		getPaths()
	}, [])

	return (
		<div className='flex flex-col p-5'>
			<Route
				coords={path?.points || []}
				name={path?.title || ''}
				region={path?.region || ''}
			/>
			<Button className='max-w-[24em] mt-5 mb-5'>TRACK!</Button>
			<input
				type='file'
				className='file-input file-input-bordered file-input-lg w-full max-w-xs'
			/>
		</div>
	)
}

export default TrackPage
