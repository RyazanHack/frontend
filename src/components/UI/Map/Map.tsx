import { useRef } from "react";
import { YMaps, Map, Polyline } from "react-yandex-maps";

export default function YMap() {
	const mapState = {
	  center: [55.739625, 37.5412],
	  zoom: 12
	};

	return (
	  <div>
		<YMaps query={{ apikey: "281788be-187b-428c-bb91-52c7c96a2979" }}>
		  <Map
		  width={800}
		  height={600}
			modules={["multiRouter.MultiRoute"]}
			state={mapState}
		  ></Map>
		</YMaps>
	  </div>
	);
  }