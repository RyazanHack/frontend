import { HomeIcon, TrophyIcon } from '@heroicons/react/24/solid'
import {
	Card,
	CardBody,
	Tab,
	Tabs,
	TabsHeader,
	Typography,
} from '@material-tailwind/react'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { useCallback, useEffect, useState } from 'react'
import UserService, { User } from '../API/UserService'
import ProfileInfoCard from '../components/UI/Profile/Profile'

const convertDate = (str: string) => {
	var parts = str.split('-')
	return new Date(
		parseInt(parts[0], 10),
		parseInt(parts[1], 10) - 1,
		parseInt(parts[2], 10)
	)
}

const ProfilePage = () => {
	const [currentIndex, setIndex] = useState<number>(0)

	const [user, setUser] = useState<User>()
	const [achievements, setAchievements] = useState<string[]>([])

	const getAchievements = useCallback(async () => {
		const counter = await UserService.getCountTravels()
		let achs = []
		for (let i = 0; i < counter; ++i) {
			if (i % 5 == 0 && i !== 0) {
				achs.push(`Поздравляем Вас с ${i}-м пройденным маршрутом!`)
			}
		}
		setAchievements(achs)
	}, [])

	const getUser = useCallback(async () => {
		const user = await UserService.info()
		setUser(user)
	}, [])

	const gender = {
		male: 'Мужской',
		female: 'Женский',
		default: '',
	}

	useEffect(() => {
		getUser()
		getAchievements()
	}, [])

	const components = [
		<ProfileInfoCard
			title='Информация о пользователе'
			details={{
				Имя: user?.name,
				Фамилия: user?.surname,
				'Дата рождения': user
					? format(convertDate(user.date_of_birth), 'PPP', { locale: ru })
					: '',
				Пол: gender[user?.gender || 'default'],
				'Номер телефона': user?.phone,
				Регион: user?.region,
			}}
		/>,
		<div>
			{achievements.map((acv, index) => {
				return (
					<Typography
						key={index}
						variant='h5'
						color='blue-gray'
						className='mb-1'
					>
						{acv}
					</Typography>
				)
			})}
		</div>,
	]

	return (
		<>
			<Card className='mx-3 mt-10 mb-6 lg:mx-4 border border-blue-gray-100'>
				<CardBody className='p-4'>
					<div className='mb-10 flex items-center justify-between flex-wrap gap-6'>
						<div className='flex items-center gap-6'>
							<div>
								<Typography variant='h5' color='blue-gray' className='mb-1'>
									{`${user?.name || ''} ${user?.surname || ''}`}
								</Typography>
							</div>
						</div>
						<div className='w-96'>
							<Tabs value='app'>
								<TabsHeader>
									<Tab value='app' onClick={() => setIndex(0)}>
										<HomeIcon className='-mt-1 mr-2 inline-block h-5 w-5' />
										Профиль
									</Tab>
									<Tab value='settings' onClick={() => setIndex(1)}>
										<TrophyIcon className='-mt-1 mr-2 inline-block h-5 w-5' />
										Достижения
									</Tab>
								</TabsHeader>
							</Tabs>
						</div>
					</div>
					{components.map((component, index) => {
						return (
							<div
								className={`gird-cols-1 mb-12 grid gap-12 px-4 lg:grid-cols-2 xl:grid-cols-3 ${
									index !== currentIndex && 'hidden'
								}`}
							>
								{component}
							</div>
						)
					})}
				</CardBody>
			</Card>
		</>
	)
}

export default ProfilePage
