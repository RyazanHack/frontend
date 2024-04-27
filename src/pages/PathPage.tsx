import { Typography } from '@material-tailwind/react'
import { useEffect, useState } from 'react'
import { PathCard } from '../components/UI/PathCard/PathCard'

interface Path {
	pathImage: string
	title: string
	description: string
}

const PathPage = () => {
	const [paths, setPaths] = useState<Path[]>()

	useEffect(() => {
		const objs = []
		for (let i = 0; i < 10; i++) {
			objs.push({
				pathImage: '/assets/ryazan-path-1.jpeg',
				title: 'Маршрут Река Ока',
				description:
					'Это место находится недалеко от пляжа реки Оки и автобусной остановки всего в 2 минутах ходьбы. Где вы можете насладиться красотами Рязанской Области',
			})
		}
		setPaths(objs)
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
								pathImage={path.pathImage}
								title={path.title}
								description={path.description}
							/>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default PathPage
