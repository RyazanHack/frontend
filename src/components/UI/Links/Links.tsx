import { FC, useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StagesService from '../../../API/StagesService'
import UserService, { User } from '../../../API/UserService'
import RoutePaths from '../../../router/Routes'
import Link from '../Link/Link'

interface LinksProps {
	className?: string
}

const Links: FC<LinksProps> = ({ className }) => {
	const navigate = useNavigate()

	const [stage, setStage] = useState<1 | 2 | 3>(1)
	const [user, setUser] = useState<User>()

	const getStage = useCallback(async () => {
		const stage = await StagesService.get_stage()
		setStage(stage)
	}, [])

	const getUser = useCallback(async () => {
		const user = await UserService.info()
		console.log('DSFGIYSDJFHGSD')
		console.log(user)
		setUser(user)
	}, [])

	useEffect(() => {
		getStage()
		getUser()
	}, [])

	const LINKS = [
		{
			href: RoutePaths.VOTING,
			title: 'Голосование',
		},
		{
			href: RoutePaths.PATH_PAGE,
			title: '✅ Маршруты',
			// disabled: stage == 1
		},
		{
			href: RoutePaths.ADMIN_PANEL,
			title: 'Панель администратора',
			disabled: user?.role !== 'admin',
		},
	]

	return (
		<div className={`${className}`}>
			{LINKS.map((link, index) => {
				return link.disabled ? (
					<></>
				) : (
					<Link
						key={index}
						className='flex flex-row mx-5'
						onClick={() => navigate(link.href)}
					>
						<p className='mr-1'>{link.title}</p>
					</Link>
				)
			})}
		</div>
	)
}

export default Links
