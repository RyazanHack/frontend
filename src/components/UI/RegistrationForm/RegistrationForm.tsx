import {
	Button,
	Card,
	Checkbox,
	Input,
	Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from '@material-tailwind/react'
import {DatePicker} from '../DatePicker/DatePicker'
import { useState } from 'react';
import RoutePaths from '../../../router/Routes';
import { useNavigate } from 'react-router-dom';
import RegionsPicker from '../RegionsPicker/RegionsPicker';
import UserService, { SignupRequest } from '../../../API/UserService';
import { useLogined } from '../../../states/logined';

export function RegistrationForm() {
  const navigate = useNavigate();
	const {setLogined} = useLogined();

  const [checked, setChecked] = useState<boolean>(false);

  const [data, setData] = useState<SignupRequest>({
    name: "",
    surname: "",
    region: "",
    gender: 'male',
    date_of_birth: "",
    email: "",
    password: "",
    phone: ""
  });

  const genders = {
    "male": "Мужской",
    "female": "Женский"
  }

	return (
		<>
		<Card color='transparent' shadow={false}>
			<Typography variant='h4' color='blue-gray'>
				Регистрация
			</Typography>
			<Typography color='gray' className='mt-1 font-normal'>
				Введите данные для регистрации:
			</Typography>
			<form className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'>
				<div className='mb-1 flex flex-col gap-6'>
					<Typography variant='h6' color='blue-gray' className='-mb-3'>
						Ваше имя:
					</Typography>
					<Input
						size='lg'
						placeholder='Иван'
            onChange={(e) => setData((prev) => ({
              ...prev,
              "name": e.target.value
            }))}
						className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
						labelProps={{
							className: 'before:content-none after:content-none',
						}}
					/>
					<Typography variant='h6' color='blue-gray' className='-mb-3'>
						Ваше фамилия:
					</Typography>
					<Input
						size='lg'
						placeholder='Иванов'
            onChange={(e) => setData((prev) => ({
              ...prev,
              "surname": e.target.value
            }))}
						className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
						labelProps={{
							className: 'before:content-none after:content-none',
						}}
					/>
          <Typography variant='h6' color='blue-gray' className='-mb-3'>
						Дата рождения:
					</Typography>

          <DatePicker
            setExternalDate={(d) => {
              if(!d)
                return
              const datestring = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear()
              setData((prev) => ({
                ...prev,
                "date_of_birth": datestring
              }))
            }}
          />

          
          <Typography variant='h6' color='blue-gray' className='-mb-3'>
						Пол:
					</Typography>
          <Menu placement="bottom-start">
            <MenuHandler>
              <Button
                ripple={false}
                variant="text"
                color="blue-gray"
                className="flex h-10 items-center gap-2 border border-blue-gray-200 pl-3"
              >
                {genders[data.gender]}
              </Button>
            </MenuHandler>
            <MenuList className="max-h-[20rem] max-w-[18rem]">
              {["male", "female"].map((gender, index) => {
                return (
                  <MenuItem
                    key={index}
                    value={gender}
                    className="flex "
                    onClick={() => setData((prev) => ({
                      ...prev,
                      "gender": gender as any
                    }))}
                  >
                    <span>{genders[gender as "male" | "female"]}</span>
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>

          <Typography variant='h6' color='blue-gray' className='-mb-3'>
						Номер телефона:
					</Typography>
          <div className="relative flex w-full max-w-[24rem]">
            <div className="flex rounded-md h-10 items-center gap-2 border border-blue-gray-200 bg-blue-gray-500/10 border-solid rounded-r-none border border-r-0 pl-3">
              <span className="flex items-center pr-5">+7</span>
            </div>
            <Input
              type="tel"
              onChange={(e) => setData((prev) => ({
                ...prev,
                "phone": "+7" + e.target.value
              }))}
              className='rounded-l-none !border-t-blue-gray-200 focus:!border-t-gray-900'
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
            />
          </div>

          <Typography variant='h6' color='blue-gray' className='-mb-3'>
						Регион:
					</Typography>

          <RegionsPicker
            setExternalRegion={(region) => setData((prev) => ({
              ...prev,
              "region": region
            }))}
          />

					<Typography variant='h6' color='blue-gray' className='-mb-3'>
						Пароль
					</Typography>
					<Input
						type='password'
						size='lg'
						placeholder='********'
            onChange={(e) => setData((prev) => ({
              ...prev,
              "password": e.target.value
            }))}
						className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
						labelProps={{
							className: 'before:content-none after:content-none',
						}}
					/>
          <Typography
            variant="small"
            color="gray"
            className="mt-2 flex items-center gap-1 font-normal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="-mt-px h-6 w-6"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
            </svg>
            Используйте не менее 8 символов: одну заглавную, одну строчную и одну цифру.
          </Typography>
          {/* <Typography variant='h6' color='blue-gray' className='-mb-3'>
						Повторите пароль
					</Typography>
					<Input
						type='password'
						size='lg'
						placeholder='********'
						className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
						labelProps={{
							className: 'before:content-none after:content-none',
						}}
					/> */}
				</div>
				<Checkbox
          onChange={(e) => setChecked(e.target.checked)}
					label={
						<Typography
							variant='small'
							color='gray'
							className='flex items-center font-normal'
						>
              <span>
                Я согласен с &nbsp;
                <span
                  className='font-medium transition-colors text-tg-accent hover:text-gray-900'
                  onClick={(e) => {
                    window.open("/eula.pdf", "_blank")
                    e.preventDefault()
                  }}
                >
								  Условиями обработки персональных данных
                </span>
              </span>
						</Typography>
					}
					containerProps={{ className: '-ml-2.5' }}
				/>
				<Button 
          className='mt-6' 
          fullWidth
          onClick={() => {
            checked && UserService.signup(data).then(() => {
              setLogined(true)
              navigate(RoutePaths.HOME)
            });
          }}
        >
					Зарегистрироваться
				</Button>
				<Typography color='gray' className='mt-4 text-center font-normal'>
					Уже есть аккаунт?{' '}
					<a 
						className='font-medium text-gray-900 cursor-pointer'
            onClick={() => navigate(RoutePaths.LOGIN)}
					>
						Войти
					</a>
				</Typography>
			</form>
		</Card>
		</>
	)
}
