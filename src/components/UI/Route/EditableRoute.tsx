import {
  Typography,
  Input,
} from "@material-tailwind/react";
import { FC, useEffect, useState } from "react";
import YMap from "../Map/Map";
import RegionsPicker from "../RegionsPicker/RegionsPicker";
import { getCapital } from "../../../utils/getRegions";

export interface EditableRouteProps {
  onChange: (title: string, region: string, points: number[][]) => void;
}

export const EditableRoute: FC<EditableRouteProps> = ({
  onChange
}) => {
  const [region, setRegion] = useState<string>()
  const [title, setTitle] = useState<string>()
  const [points, setPoints] = useState<number[][]>()

  useEffect(() => {
    onChange(title || "", region || "", points || [])
  }, [region, title, points])

  return (
    <div className='mb-1 flex flex-col gap-6 w-80'>
      <Typography variant='h6' color='blue-gray' className='-mb-3'>
        Название маршрута
      </Typography>
      <Input
        size='lg'
        onChange={(e) => {
          setTitle(e.target.value)
        }}
        className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
        labelProps={{
          className: 'before:content-none after:content-none',
        }}
      />

      <Typography variant='h6' color='blue-gray' className='-mb-3'>
        Регион:
      </Typography>

      <RegionsPicker
        setExternalRegion={setRegion}
      />
      
      {region &&
      <>
        <Typography variant='h6' color='blue-gray' className='-mb-3'>
          Точки маршрута:
        </Typography>
        <YMap center={getCapital(region)} onChange={setPoints}/>
      </>
      }
    </div>
  );
}

export default EditableRoute;