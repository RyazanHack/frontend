import { Button } from "@material-tailwind/react"
import EditableRoute from "../components/UI/Route/EditableRoute"
import { useState } from "react"
import TracksService, { Track } from "../API/TracksService"
import { useNavigate } from "react-router-dom"
import RoutePaths from "../router/Routes"


const AddTrackPage = () => {
	const navigate = useNavigate()

	const [data, setData] = useState<Track>()

	return (
        <>
			<div className='items-center m-10'>
				<EditableRoute 
					onChange={(title, region, points) => setData({
						title,
						region,
						points: JSON.stringify(points)
					})}
				/>
				
				<Button 
					className='mt-6 max-w-[24em]' 
					fullWidth
					onClick={() => {
						navigate(RoutePaths.ADMIN_PANEL)
						data && TracksService.add_track(data)
					}}
				>
					Создать
				</Button>
			</div>
		</>
	)
}

export default AddTrackPage
