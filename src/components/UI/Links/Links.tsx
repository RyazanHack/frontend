import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import RoutePaths from '../../../router/Routes'
import Link from '../Link/Link'

const LINKS = [
	{
		href: RoutePaths.VOTING,
		title: 'Голосование',
	},
	{
		href: RoutePaths.ADMIN_PANEL,
		title: 'Панель администратора'
	}
]

const Links: FC = () => {
	const navigate = useNavigate()

	return (
		<div className='flex flex-row'>
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
