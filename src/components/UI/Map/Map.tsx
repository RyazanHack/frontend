import { FC, memo, useEffect, useMemo, useState } from "react";
import { YMaps, Map, Polyline, Placemark, withYMaps } from "react-yandex-maps";
import { YA_API_KEY } from "../../../config";

function removeByIndex<T>(array: T[], index: number) {
  return array.filter(function (el, i) {
    return index !== i;
  });
}

type YmapsProps = {
  ymaps: any;
};

interface MapProps {
  center: string,
  coords?: number[][],
  readOnly?: boolean,
  onChange?: (coords: number[][]) => void
}

const YMap: FC<MapProps> = ({
  center,
  coords,
  readOnly,
  onChange
}) => {
  const [coordinates, setCoordinates] = useState<number[][]>(coords || [])

  const [centerCoords, setCenter] = useState<number[]>([0, 0])

  const [loaded, setLoaded] = useState<boolean>(false)

	const mapState = useMemo(() => ({
	  center: centerCoords,
	  zoom: 8
	}), [centerCoords]);

  useEffect(() => {
    setLoaded(false)
  }, [center])

  const PositionedMap: React.FC<YmapsProps> = memo(({ ymaps }) => {
    if(!loaded) {
      ymaps.geocode(center).then((result: any) => {
        const coords = result.geoObjects.get(0).geometry.getCoordinates();
        setCenter(coords);
      });
      setLoaded(true)
    }
    return (<></>)
  });

  const ConnectedMap = useMemo(() => {
    return withYMaps(PositionedMap, true, ["geolocation", "geocode"]);
  }, [PositionedMap]);

  useEffect(() => {
    onChange && onChange(coordinates);
  }, [coordinates])

	return (
	  <div>
		<YMaps query={{apikey: YA_API_KEY}}>
      <ConnectedMap />
		  <Map
        width={800}
        height={600}
        modules={["multiRouter.MultiRoute"]}
        state={mapState}
        onClick={(e: any) => !readOnly && setCoordinates((coords) => ([...coords, e.get("coords")]))}
		  >
          {coordinates.map((placemark, index) => (
            <Placemark
              geometry={placemark}
              key={index}
              options={{
                zIndex: 100
              }}
              onClick={() => !readOnly && setCoordinates((coords) => (removeByIndex(coords, index)))} 
            />
          ))}
          <Polyline
            geometry={coordinates}
            options={{
              balloonCloseButton: true,
              strokeColor: "#333333",
              strokeWidth: 5,
              strokeOpacity: 0.9,
              editorMaxPoints: 6,
            }}
          />
      </Map>
		</YMaps>
	  </div>
	);
}

export default YMap