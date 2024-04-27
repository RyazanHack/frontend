import { Suspense } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Footer from '../components/UI/Footer/Footer'
import Header from '../components/UI/Header/Header'
import { multiLazy } from '../utils/multiLazy'
import RoutePaths from './Routes'

const AppRouter = () => {
	const [
		HomePage,
		SignupPage,
		LoginPage,
		VotingPage,
		ProfilePage,
		AdminPanelPage,
		BillingPage,
		PathPage,
	] = multiLazy([
		() => import('../pages/HomePage'),
		() => import('../pages/SignupPage'),
		() => import('../pages/LoginPage'),
		() => import('../pages/VotingPage'),
		() => import('../pages/ProfilePage'),
		() => import('../pages/AdminPanelPage'),
		() => import('../pages/BillingPage'),
		() => import('../pages/PathPage'),
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
							<Footer />
						</>
					}
				>
					<Route path={RoutePaths.HOME} element={<HomePage />} />
					<Route path={RoutePaths.SIGNUP} element={<SignupPage />} />
					<Route path={RoutePaths.VOTING} element={<VotingPage />} />
					<Route path={RoutePaths.LOGIN} element={<LoginPage />} />
					<Route path={RoutePaths.PROFILE} element={<ProfilePage />} />
					<Route path={RoutePaths.ADMIN_PANEL} element={<AdminPanelPage />} />
					<Route path={RoutePaths.BILLING_PAGE} element={<BillingPage />} />
					<Route path={RoutePaths.PATH_PAGE} element={<PathPage />} />
				</Route>
			</Routes>
		</Suspense>
	)
}

export default AppRouter
