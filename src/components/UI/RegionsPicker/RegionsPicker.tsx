import { FC, useEffect, useState } from 'react'
import { getRegions } from '../../../utils/getRegions'
import { Region } from '../../../API/RegionsService'


interface RegionsPickerProps {
	setExternalRegion?: (region: string) => void,
	className?: string,
	regions?: Region[]
}

const RegionsPicker: FC<RegionsPickerProps> = ({ setExternalRegion, className, regions: regs }) => {
	const [regions, setRegions] = useState(getRegions())
	// const [currentRegion, setCurrentRegion] = useState<string>('')
	const [searchTerm, setSearchTerm] = useState('')
	const [showOptions, setShowOptions] = useState(false)

	useEffect(() => {
		if(regs)
			setRegions(regs as any)
	}, [regs])

	useEffect(() => {
		console.log(regions)
	}, [regions])

	const filteredRegions = regions.filter(region =>
		region.name.toLowerCase().includes(searchTerm.toLowerCase())
	)

	const handleInputChange = (e: any) => {
		setSearchTerm(e.target.value)
		setShowOptions(true)
	}

	const handleSelectOption = (regionName: string) => {
		// setCurrentRegion(regionName)
		setExternalRegion && setExternalRegion(regionName)
		setSearchTerm(regionName)
		setShowOptions(false)
	}

	return (
		<div className={`${className} relative`}>
			<input
				type='text'
				placeholder='Поиск по регионам'
				className='w-full px-3 py-2 border border-blue-gray-200 rounded-md focus:outline-none focus:ring focus:ring-blue-200'
				value={searchTerm}
				onChange={handleInputChange}
			/>
			{showOptions && (
				<div className='absolute z-10 w-full bg-white shadow-md rounded-md mt-1 max-h-[24em] overflow-y-auto'>
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
