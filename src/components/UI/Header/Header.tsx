import { FC } from 'react'
import GetWallet from '../Login/Login'
import Links from '../Links/Links'
import Logo from '../Logo/Logo'

const Header: FC = () => {
	return (
		<div className='flex flex-row justify-between mt-2 py-5 px-10 items-center border-b border-black/25 border-solid'>
			<Logo />
			<Links />
			<GetWallet />
		</div>
	)
}

export default Header
