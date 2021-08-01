import React from 'react';
import { Map } from 'react-leaflet';
import L, { CRS } from 'leaflet'
import map_electroculus from '../../images/map_electroculus.jpg';
import MarkerCustom from '../icons/marker/index';
import './style.css';
import FullscreenControl from 'react-leaflet-fullscreen';
import 'react-leaflet-fullscreen/dist/styles.css';

const MapComponent = ({state, setState}) => {

  const mapRef = React.useRef(null);

  const changeState = (obj) => {
    const newState = state.map(item => {
      if (item.id === obj.id) {
        item.obtained = obj.obtained;
        return item;
      }
      return item;
    });
    setState(newState);
  }

  React.useEffect(() => {
    const map = mapRef.current.leafletElement;
    const bounds = [[-25, -26.5], [221, 423.5]];
    const image = L.imageOverlay(map_electroculus,
      bounds
    ).addTo(map);
    map.fitBounds(image.getBounds());
  }, []);

return (
  <div className="map_component_wrapper">
    <Map
      ref={mapRef}
      minZoom={1}
      maxZoom={4}
      crs={CRS.Simple}
      bounds={[[-25, -26.5], [221, 423.5]]}
      boundsOptions={{padding: [50, 50]}}
      style={{ height: "85vh" }}
      maxBoundsViscosity={1.0}
      zoom={1} 
      center={[100, 240]}
      // style={{ height: '75vh', width: '100%' }}
      >
        {
          state.map(item => {
            return(
              <MarkerCustom
                xy={[item.loc[0] + 98,item.loc[1] + 198.5]}
                key={item.id}
                id={item.id}
                obtained={item.obtained}
                changeState={changeState}
                // xy={[103.1875,28.3125]} 98 198,5
                icon={`https://img.gamewith.jp/article_tools%2Fgenshin%2Fgacha%2Frai_${item.id}.png`}
              />
            )
          })
        }
      {/* <MarkerCustom
        xy={[201.1875,226.8125]}
        // xy={[103.1875,28.3125]} 98 198,5
        icon="https://img.gamewith.jp/article_tools%2Fgenshin%2Fgacha%2Frai_1.png"
      /> */}
        <FullscreenControl position="topleft" />
      </Map>
  </div>
)
}

export default MapComponent;