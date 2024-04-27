import { FC } from 'react'
import { WALLET } from '../../../config'

interface GetWalletProps {
	className?: string
}

const Login: FC<GetWalletProps> = ({ className }) => {
	return (
		<button
			className={`btn btn-outline ${className}`}
			onClick={() => window.open(WALLET)}
		>
			Войти
		</button>
	)
}

export default Login
