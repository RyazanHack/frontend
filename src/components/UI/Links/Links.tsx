import { FC, useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import RoutePaths from '../../../router/Routes'
import Link from '../Link/Link'
import StagesService from '../../../API/StagesService'

interface LinksProps {
	className?: string
}

const Links: FC<LinksProps> = ({ className }) => {
	const navigate = useNavigate()

	const [stage, setStage] = useState<1 | 2 | 3>(1);

	const getStage = useCallback(async () => {
		const stage = await StagesService.get_stage();
		setStage(stage);
	}, [])

	useEffect(() => {
		getStage()
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
		},
	]

	return (
		<div className={`${className}`}>
			{LINKS.map((link, index) => {
				return (
					link.disabled ? <></> :
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
