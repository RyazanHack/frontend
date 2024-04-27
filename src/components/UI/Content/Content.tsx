import { FC } from 'react'
import GetWallet from '../Login/Login'
import PicturePerspective from '../PicturePerspective/PicturePerspective'

const Content: FC = () => {
	return (
		<div className='flex flex-row justify-center items-center h-screen'>
			<div className='max-w-[400px] min-h-64'>
				<p className='text-tg-accent text-7xl font-bold'>Web3,</p>
				<p className='text-tg-accent text-7xl font-bold mt-2'>telegram.</p>
				<p className='text-slate-400 text-lg mt-5'>
					Your crypto, exchange, and NFTs all in one place - secure and simple.
				</p>
				<GetWallet className={'mt-5'} />
			</div>
			<PicturePerspective className='max-w-[450px]' src='/assets/screens.png' />
		</div>
	)
}

export default Content
