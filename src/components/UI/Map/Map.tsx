import { useRef } from "react";
import { YMaps, Map, Polyline } from "react-yandex-maps";

const data = [
    {
      id: 155491399,
      latitude: 59.841657,
      longitude: 30.497507,
      
    },
    {
      id: 155491499,
      latitude: 59.841657,
      longitude: 30.497507,
      
    },
    {
      id: 155491599,
      latitude: 59.841657,
      longitude: 30.497507,
      
    },
    {
      id: 155491699,
      latitude: 59.841657,
      longitude: 30.497507,
      
    },
    {
      id: 155491799,
      latitude: 59.841657,
      longitude: 30.497507,
      
    },
    {
      id: 155491899,
      latitude: 59.841758,
      longitude: 30.497372,
      
    },
    {
      id: 155492003,
      latitude: 59.841930,
      longitude: 30.496183,
      
    },
    {
      id: 155492107,
      latitude: 59.841930,
      longitude: 30.496183,
      
    },
    {
      id: 155492207,
      latitude: 59.841930,
      longitude: 30.496183,
      
    },
    {
      id: 155492307,
      latitude: 59.841930,
      longitude: 30.496183,
      
    },
    {
      id: 155492407,
      latitude: 59.841828,
      longitude: 30.494983,
      
    },
    {
      id: 155492507,
      latitude: 59.841977,
      longitude: 30.497578,
      
    },
    {
      id: 155492617,
      latitude: 59.842428,
      longitude: 30.495733,
      
    },
    {
      id: 155492717,
      latitude: 59.849628,
      longitude: 30.482435,
      
    },
    {
      id: 155492817,
      latitude: 59.858230,
      longitude: 30.479668,
      
    },
    {
      id: 155492917,
      latitude: 59.852562,
      longitude: 30.474692,
      
    },
    {
      id: 155493020,
      latitude: 59.842533,
      longitude: 30.455898,
      
    },
    {
      id: 155493124,
      latitude: 59.828993,
      longitude: 30.439870,
      
    },
    {
      id: 155493224,
      latitude: 59.820918,
      longitude: 30.414182,
      
    },
    {
      id: 155493330,
      latitude: 59.815650,
      longitude: 30.374623,
      
    },
    {
      id: 155493430,
      latitude: 59.813280,
      longitude: 30.346787,
      
    },
    {
      id: 155493535,
      latitude: 59.812392,
      longitude: 30.320255,
      
    },
    {
      id: 155493635,
      latitude: 59.823187,
      longitude: 30.298113,
      
    },
    {
      id: 155493737,
      latitude: 59.835302,
      longitude: 30.281912,
      
    },
    {
      id: 155493839,
      latitude: 59.837740,
      longitude: 30.263090,
      
    },
    {
      id: 155493939,
      latitude: 59.838595,
      longitude: 30.261452,
      
    },
    {
      id: 155494072,
      latitude: 59.839263,
      longitude: 30.260150,
      
    },
    {
      id: 155494237,
      latitude: 59.840617,
      longitude: 30.257815,
      
    },
    {
      id: 155494346,
      latitude: 59.841315,
      longitude: 30.256185,
      
    },
    {
      id: 155494447,
      latitude: 59.841308,
      longitude: 30.245912,
      
    },
    {
      id: 155494547,
      latitude: 59.838047,
      longitude: 30.232440,
      
    },
    {
      id: 155494658,
      latitude: 59.834200,
      longitude: 30.217772,
      
    },
    {
      id: 155494773,
      latitude: 59.841560,
      longitude: 30.209987,
      
    },
    {
      id: 155494925,
      latitude: 59.841810,
      longitude: 30.207972,
      
    },
    {
      id: 155495071,
      latitude: 59.841960,
      longitude: 30.208012,
      
    },
    {
      id: 155495206,
      latitude: 59.841900,
      longitude: 30.207975,
      
    },
    {
      id: 155495320,
      latitude: 59.841827,
      longitude: 30.207953,
      
    },
    {
      id: 155495438,
      latitude: 59.841715,
      longitude: 30.207788,
      
    },
    {
      id: 155495567,
      latitude: 59.842403,
      longitude: 30.208572,
      
    }
  ];

const PreParedData = data
    .map(item => [item.latitude, item.longitude])

const center = PreParedData[Math.floor(PreParedData.length / 2)];

export default function YMap() {
	const mapState = {
	  center,
	  zoom: 12
	};

	return (
	  <div>
		<YMaps>
		  <Map
            width={800}
            height={600}
			modules={["multiRouter.MultiRoute"]}
			state={mapState}
		  >
          <Polyline
            geometry={PreParedData}
            options={{
              balloonCloseButton: true,
              strokeColor: "#333333",
              strokeWidth: 5,
              strokeOpacity: 0.9,
              editorMaxPoints: 6,
            }}
          /></Map>
		</YMaps>
	  </div>
	);
  }