import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Input,
} from "@material-tailwind/react";
import { FC } from "react";
import YMap from "../Map/Map";
import RegionsPicker from "../RegionsPicker/RegionsPicker";


export const EditableRoute: FC = () => {
  return (
    <div className='mb-1 flex flex-col gap-6 w-80'>
      <Typography variant='h6' color='blue-gray' className='-mb-3'>
        Название маршрута
      </Typography>
      <Input
        size='lg'
        className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
        labelProps={{
          className: 'before:content-none after:content-none',
        }}
      />

      <Typography variant='h6' color='blue-gray' className='-mb-3'>
        Регион:
      </Typography>

      <RegionsPicker/>
      
      <Typography variant='h6' color='blue-gray' className='-mb-3'>
        Точки маршрута:
      </Typography>
      <YMap center="Рязань"/>
    </div>
  );
}

export default EditableRoute;