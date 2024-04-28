import { BrowserRouter } from 'react-router-dom'
import AppRouter from './router/Pages'
import { TypeAnimation } from 'react-type-animation';

const App = () => {
	return (
		<BrowserRouter>
			<AppRouter />
		</BrowserRouter>
		
	)
}

export default App
