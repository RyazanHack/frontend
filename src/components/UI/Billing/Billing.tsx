import {
	Button,
	Dialog,
	DialogBody,
	DialogFooter,
	DialogHeader,
	Input,
	Typography,
} from '@material-tailwind/react'
import { FC, useCallback, useState } from 'react'

interface BillingProps {
	className?: string
}

export const Billing: FC<BillingProps> = ({ className }) => {
	const [open, setOpen] = useState(false)
	const [countVotes, setCountVotes] = useState<number>(0)

	const handleOpen = () => setOpen(!open)

	const handleCreatePayment = useCallback(() => {
		console.log(countVotes)
	}, [countVotes])

	return (
		<>
			<Button className={`btn btn-outline ${className}`} onClick={handleOpen}>
				Купить голоса
			</Button>
			<Dialog open={open} handler={handleOpen}>
				<DialogHeader>Покупка голосов</DialogHeader>
				<DialogBody>
					<div className='flex'>
						<Typography variant='h5' color='blue-gray' className='-mb-3'>
							Способ оплаты
						</Typography>
						<img className='w-32 ml-2' src='/icons/UI/iomoney.svg' alt='' />
					</div>
					<Input
						onChange={event => setCountVotes(parseInt(event.target.value))}
						size='lg'
						type='number'
						placeholder='Количество голосов'
						className=' !border-t-blue-gray-200 focus:!border-t-gray-900 mt-5'
						labelProps={{
							className: 'before:content-none after:content-none',
						}}
					/>
				</DialogBody>
				<DialogFooter>
					<Button
						variant='text'
						color='red'
						onClick={handleOpen}
						className='mr-1'
					>
						<span>Отменить</span>
					</Button>
					<Button
						variant='gradient'
						color='green'
						onClick={handleCreatePayment}
					>
						<span>Подтвердить</span>
					</Button>
				</DialogFooter>
			</Dialog>
		</>
	)
}
