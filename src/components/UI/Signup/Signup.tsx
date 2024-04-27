import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import RoutePaths from '../../../router/Routes'

interface GetWalletProps {
	className?: string
}

const Signup: FC<GetWalletProps> = ({ className }) => {
	const navigate = useNavigate();

	return (
		<button
			className={`btn btn-outline ${className}`}
			onClick={() => navigate(RoutePaths.SIGNUP)}
		>
			Войти
		</button>
	)
}

export default Signup
