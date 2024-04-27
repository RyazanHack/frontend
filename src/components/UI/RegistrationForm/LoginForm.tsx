import {
	Button,
	Card,
	Input,
	Typography,
} from '@material-tailwind/react'
import { useNavigate } from 'react-router-dom';
import RoutePaths from '../../../router/Routes';

export function LoginForm() {
	const navigate = useNavigate();

	return (
		<>
		<Card color='transparent' shadow={false}>
			<Typography variant='h4' color='blue-gray'>
				Войти
			</Typography>
			<form className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'>
				<div className='mb-1 flex flex-col gap-6'>
          <Typography variant='h6' color='blue-gray' className='-mb-3'>
						Номер телефона:
					</Typography>
          <div className="relative flex w-full max-w-[24rem]">
            <div className="flex rounded-md h-10 items-center gap-2 border border-blue-gray-200 bg-blue-gray-500/10 border-solid rounded-r-none border border-r-0 pl-3">
              <span className="flex items-center pr-5">+7</span>
            </div>
            <Input
              type="tel"

              className='rounded-l-none !border-t-blue-gray-200 focus:!border-t-gray-900'
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
            />
          </div>
					
					<Typography variant='h6' color='blue-gray' className='-mb-3'>
						Пароль
					</Typography>
					<Input
						type='password'
						size='lg'
						placeholder='********'
						className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
						labelProps={{
							className: 'before:content-none after:content-none',
						}}
					/>

				</div>
				
				<Button className='mt-6' fullWidth>
					Войти
				</Button>
				<Typography color='gray' className='mt-4 text-center font-normal'>
					Нет аккаунта?{' '}
					<a 
            className='font-medium text-gray-900 cursor-pointer'
            onClick={() => navigate(RoutePaths.SIGNUP)}
          >
						Зарегистрироваться
					</a>
				</Typography>
			</form>
		</Card>
		</>
	)
}
