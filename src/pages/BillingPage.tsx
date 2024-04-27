import { useParams } from 'react-router-dom'
import Content from '../components/UI/Content/Content'

const BillingPage = () => {
    const {key} = useParams();

	return (
        <div className='flex flex-row justify-center items-center mt-10'>
            <div className='min-h-64 text-center'>
                <p className='text-tg-accent text-6xl font-bold'>Успешная покупка,</p>
                <p className='text-tg-accent text-6xl font-bold mt-2'>Спасибо!</p>
            </div>
        </div>
	)
}

export default BillingPage
