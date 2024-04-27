import { Suspense } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Header from '../components/UI/Header/Header'
import { multiLazy } from '../utils/multiLazy'
import RoutePaths from './Routes'

const AppRouter = () => {
	const [HomePage, LoginPage, VotingPage] = multiLazy([
		() => import('../pages/HomePage'),
		() => import('../pages/LoginPage'),
		() => import('../pages/VotingPage'),
	])

	return (
		<Suspense fallback={<></>}>
			<Routes>
				<Route
					path='/'
					element={
						<>
							<Header />
							<Outlet />
						</>
					}
				>
					<Route path={RoutePaths.HOME} element={<HomePage />} />
					<Route path={RoutePaths.LOGIN} element={<LoginPage />} />
					<Route path={RoutePaths.VOTING} element={<VotingPage />} />
				</Route>
			</Routes>
		</Suspense>
	)
}

export default AppRouter
