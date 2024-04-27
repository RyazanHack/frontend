import { FC } from 'react'
import { LINK_DISCORD, LINK_GITHUB } from '../../../config'
import RoutePaths from '../../../router/Routes'
import Icon from '../Icon/Icon'
import Link from '../Link/Link'
import { useNavigate } from 'react-router-dom'

const LINKS = [
	{
		href: RoutePaths.VOTING,
		title: 'Голосование'
	},
	{
		href: RoutePaths.PROFILE,
		title: 'Личный кабинет'
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
