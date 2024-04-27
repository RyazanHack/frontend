import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { FC } from "react";
import YMap from "../Map/Map";
import { getCapital } from "../../../utils/getRegions";

interface RouteProps {
  region: string,
  name: string,
  coords: number[][]
}

export const Route: FC<RouteProps> = ({ region, coords, name }) => {
  return (
    <div>
      <Typography variant="h4" color="blue-gray">
        {region}
      </Typography>
      <Typography variant="small"
                  color="blue-gray"
                  className="font-semibold">
        {name}
      </Typography>
      <YMap center={getCapital(region)} coords={coords} readOnly/>
    </div>
  );
}

export default Route;