import { Suspense, useEffect } from 'react'
import { Outlet, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { multiLazy } from '../utils/multiLazy'
import RoutePaths from './Routes'
import Header from '../components/UI/Header/Header'

const AppRouter = () => {
	const [
		HomePage,
		LoginPage
	] = multiLazy([
		() => import('../pages/HomePage'),
		() => import('../pages/LoginPage')
	])

	return (
		<Suspense fallback={<></>}>
			<Routes>
				<Route path='/' element={
          <>
            <Header />
            <Outlet/>
          </>
        }>
          <Route path={RoutePaths.HOME} element={<HomePage />} />
          <Route path={RoutePaths.LOGIN} element={<LoginPage />} />
        </Route>
			</Routes>
		</Suspense>
	)
}

export default AppRouter