import { Suspense, useEffect } from 'react'
import { Outlet, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { multiLazy } from '../utils/multiLazy'
import RoutePaths from './Routes'

const AppRouter = () => {
	const [
		HomePage
	] = multiLazy([
		() => import('../pages/HomePage')
	])

	return (
		<Suspense fallback={<></>}>
			<Routes>
				<Route path={RoutePaths.HOME} element={<HomePage />} />
			</Routes>
		</Suspense>
	)
}

export default AppRouter