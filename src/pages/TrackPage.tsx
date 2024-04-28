import { Button } from '@material-tailwind/react'
import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import TracksService, { TrackResp } from '../API/TracksService'
import Route from '../components/UI/Route/Route'

const TrackPage = () => {
	const { id } = useParams()

	const [path, setPath] = useState<TrackResp>()

	const [file, setFile] = useState<File | null>(null)

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = event.target.files ? event.target.files[0] : null
		setFile(selectedFile)
	}

	const getPaths = useCallback(async () => {
		const paths = await TracksService.get_one(parseInt(id!))

		setPath(paths)
	}, [])

	useEffect(() => {
		getPaths()
	}, [])

	const handleSend = () => {
		TracksService.travelComplete(parseInt(id!), file)
	}

	return (
		<div className='flex flex-col p-5'>
			<Route
				coords={path?.points || []}
				name={path?.title || ''}
				region={path?.region || ''}
			/>
			<input
				type='file'
				onChange={handleFileChange}
				className='file-input file-input-bordered file-input-lg w-full max-w-xs mt-5'
			/>
			<Button onClick={handleSend} className='max-w-[24em] mt-5 mb-5'>
				Завершить трек!
			</Button>
		</div>
	)
}

export default TrackPage
