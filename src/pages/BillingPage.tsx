import { useNavigate, useParams } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react';
import BillingService from '../API/BillingService';
import RoutePaths from '../router/Routes';

const BillingPage = () => {
    const {key} = useParams();

    const navigate = useNavigate();

    const [confirmed, setConfirmed] = useState<boolean>(false);

    const CheckConfirmed = useCallback(async () => {
        const confirmed = await BillingService.is_confirmed(key!);

        if(!confirmed) {
            navigate(RoutePaths.HOME)
        }

        setConfirmed(confirmed);
    }, [])

    useEffect(() => {
        CheckConfirmed()
    }, [])

	return (
        confirmed &&
        <div className='flex flex-row justify-center items-center mt-10'>
            <div className='min-h-64 text-center'>
                <p className='text-tg-accent text-6xl font-bold'>Успешная покупка,</p>
                <p className='text-tg-accent text-6xl font-bold mt-2'>Спасибо!</p>
            </div>
        </div>
	)
}

export default BillingPage
