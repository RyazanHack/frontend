import { FC } from 'react'

const Logo: FC = () => {
	return (
		<div className='flex flex-row justify-center items-center cursor-pointer'>
			<img
				className='w-[25px] lg:w-[40px]'
				src='/icons/logo/bitracking.svg'
				alt='Logo'
			/>
			<p className='text-xl lg:text-3xl ml-2 font-bold'>Bi Tracking</p>
		</div>
	)
}

export default Logo
