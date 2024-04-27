import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import RoutePaths from '../../../router/Routes'
import Link from '../Link/Link'

interface LinksProps {
	className?: string
}

const LINKS = [
	{
		href: RoutePaths.VOTING,
		title: 'Голосование',
	},
	{
		href: RoutePaths.PATH_PAGE,
		title: '✅ Маршруты',
	},
	{
		href: RoutePaths.ADMIN_PANEL,
		title: 'Панель администратора',
	},
]

const Links: FC<LinksProps> = ({ className }) => {
	const navigate = useNavigate()

	return (
		<div className={`${className}`}>
			{LINKS.map((link, index) => {
				return (
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
