import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { getRegions } from '../../../utils/getRegions'

interface RegionsPickerProps {
	setExternalRegion: Dispatch<SetStateAction<string>>
}

const RegionsPicker: FC<RegionsPickerProps> = ({ setExternalRegion }) => {
	const [regions] = useState(getRegions())
	const [currentRegion, setCurrentRegion] = useState<string>('')
	const [searchTerm, setSearchTerm] = useState('')
	const [showOptions, setShowOptions] = useState(false)

	useEffect(() => {
		console.log(regions)
	}, [regions])

	const filteredRegions = regions.filter(region =>
		region.name.toLowerCase().includes(searchTerm.toLowerCase())
	)

	const handleInputChange = e => {
		setSearchTerm(e.target.value)
		setShowOptions(true)
	}

	const handleSelectOption = (regionName: string) => {
		setCurrentRegion(regionName)
		setExternalRegion(regionName)
		setSearchTerm(regionName)
		setShowOptions(false)
	}

	return (
		<div className='w-72 relative'>
			<input
				type='text'
				placeholder='Поиск по регионам'
				className='w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200'
				value={searchTerm}
				onChange={handleInputChange}
			/>
			{showOptions && (
				<div className='absolute z-10 w-full bg-white shadow-md rounded-md mt-1'>
					{filteredRegions.map((region, index) => (
						<div
							key={index}
							className='cursor-pointer px-3 py-2 hover:bg-blue-100'
							onClick={() => handleSelectOption(region.name)}
						>
							{region.name}
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default RegionsPicker
