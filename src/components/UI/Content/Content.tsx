import { FC } from 'react'
import PicturePerspective from '../PicturePerspective/PicturePerspective'

const Content: FC = () => {
	return (
		<div className='flex flex-col justify-center items-center mt-5'>
			<div className='flex flex-col justify-center items-center mr-5 md:flex-row lg:flex-row text-center'>
				<div className='max-w-[400px] min-h-64'>
					<p className='text-tg-accent text-6xl font-bold'>BiTracking,</p>
					<p className='text-tg-accent text-6xl font-bold mt-2'>туризм.</p>
					<p className='text-lg mt-5 font-bold'>
						Откройте новые тропы: Голосуйте за будущее пешего туризма в России!
					</p>
				</div>
				<PicturePerspective
					className='max-w-[450px] ml-5'
					src='/assets/mountains.png'
				/>
			</div>
			<div className='flex flex-col justify-center items-center max-w-6xl m-5'>
				<p className='text-tg-accent/75 text-5xl font-bold'>
					Встречайте BiTracking!
				</p>
				<p className='text-lg mt-5 font-bold'>
					Узнайте о нашей миссии: создать безопасные и захватывающие маршруты
					для пеших туристов по всей России. Мы стремимся развивать пешеходный
					туризм, делая его доступным и интересным для всех.
				</p>
			</div>
			<div className='flex flex-col justify-center items-center mr-5 md:flex-row lg:flex-row'>
				<PicturePerspective
					className='max-w-[450px] mr-5'
					src='/assets/lake.png'
				/>
				<div className='max-w-[400px] min-h-64 ml-5'>
					<p className='text-tg-accent text-6xl font-bold'>Голосуй!</p>
					<p className='text-lg mt-5 font-bold'>
						Приветствуем на платформе, где ваш голос имеет значение. Мечтаете о
						новом захватывающем маршруте для путешествия? Здесь вы можете влиять
						на выбор следующего направления!
					</p>
				</div>
			</div>
		</div>
	)
}

export default Content
