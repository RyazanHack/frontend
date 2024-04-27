import { BrowserRouter } from 'react-router-dom'
import AppRouter from './router/Pages'
import Route from './components/UI/Route/Route'
import EditableRoute from './components/UI/Route/EditableRoute'

const App = () => {
	return (
		// <BrowserRouter>
		// 	<AppRouter />
		// </BrowserRouter>
		<EditableRoute/>
	)
}

export default App
