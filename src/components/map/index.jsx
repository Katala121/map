import React from 'react';
import { Map } from 'react-leaflet';
import L, { CRS } from 'leaflet'
import map_electroculus from '../../images/map_electroculus.jpg';
import MarkerCustom from '../icons/marker/index';
import './style.css';
import { pinDatas } from '../../data/data';
import FullscreenControl from 'react-leaflet-fullscreen';
import 'react-leaflet-fullscreen/dist/styles.css';

L.Icon.Default.imagePath = "https://img.gamewith.jp/article_tools%2Fgenshin%2Fgacha%2Frai_1.png";

const MapComponent = () => {

  const mapRef = React.useRef(null);

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
      maxBoundsViscosity={1.0}
      boundsOptions={{ padding: [50, 50] }}
      style={{ height: "85vh" }}
      zoom={2} 
      // center={[config.lat, config.lng]}
      // style={{ height: '75vh', width: '100%' }}
      >
        {
          pinDatas.map(item => {
            return(
              <MarkerCustom
                xy={[item.loc[0] + 98,item.loc[1] + 198.5]}
                key={item.id}
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