import { FC } from 'react'
import { Billing } from '../Billing/Billing'
import Links from '../Links/Links'
import Logo from '../Logo/Logo'
import Signup from '../Signup/Signup'
import { useLogined } from '../../../states/logined'

const Header: FC = () => {
	const {logined} = useLogined();

	return (
		<div className='flex flex-row justify-between mt-2 py-5 px-10 items-center border-b border-black/25 border-solid'>
			<Logo />
			<Links />
			<div className='flex flex-row'>
				<Billing className='mr-5' />
				<Signup />
			</div>
			{logined && <>
				<Links />
				<Billing />
				</>
			}
			<Signup />
		</div>
	)
}

export default Header
