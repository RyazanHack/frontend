import { FC } from 'react'
import PicturePerspective from '../PicturePerspective/PicturePerspective'

const Content: FC = () => {
	return (
		<div className='flex flex-row justify-center items-center h-screen'>
			<div className='max-w-[400px] min-h-64'>
				<p className='text-tg-accent text-6xl font-bold'>Bi Tracking,</p>
				<p className='text-tg-accent text-6xl font-bold mt-2'>туризм.</p>
				<p className='text-slate-400 text-lg mt-5'>
					Откройте новые тропы: Голосуйте за будущее пешего туризма в России!
				</p>
			</div>
			<PicturePerspective className='max-w-[450px]' src='/assets/screens.png' />
		</div>
	)
}

export default Content