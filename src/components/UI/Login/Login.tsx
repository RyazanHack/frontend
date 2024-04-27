import { FC } from 'react'
import { WALLET } from '../../../config'
import { useNavigate } from 'react-router-dom'
import RoutePaths from '../../../router/Routes'

interface GetWalletProps {
	className?: string
}

const Login: FC<GetWalletProps> = ({ className }) => {
	const navigate = useNavigate();

	return (
		<button
			className={`btn btn-outline ${className}`}
			onClick={() => navigate(RoutePaths.LOGIN)}
		>
			Войти
		</button>
	)
}

export default Login
