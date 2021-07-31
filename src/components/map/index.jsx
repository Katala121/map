import React from 'react';
import { Map } from 'react-leaflet';
import L, { CRS } from 'leaflet'
import map_electroculus from '../../images/map_electroculus.jpg';
import marker_path from '../../images/rai_1.png';
import MarkerCustom from '../icons/marker/index';
import './style.css';

// L.Icon.Default.imagePath = marker_path;

const MapComponent = () => {

  const mapRef = React.useRef(null);

  const [config, setConfig] = React.useState({
    zoom: 1,
    lat: 60.43643,
    lng: 372,
  })

  React.useEffect(() => {
    const map = mapRef.current.leafletElement;
    const bounds = [[-25, -26.5], [467, 873.5]];
    const image = L.imageOverlay(map_electroculus,
      bounds
    ).addTo(map);

    map.fitBounds(image.getBounds());
  }, []);

return (
  <div className="map_component_wrapper">
    <Map
      ref={mapRef}
      minZoom={0}
      maxZoom={3}
      crs={CRS.Simple}
      maxBoundsViscosity={1.0}
      boundsOptions={{ padding: [50, 50] }}
      style={{ height: "85vh" }}
      zoom={config.zoom} 
      // center={[config.lat, config.lng]}
      // style={{ height: '75vh', width: '100%' }}
      >
      <MarkerCustom
        xy={[427.1875,480.3125]}
        icon="https://img.gamewith.jp/article_tools%2Fgenshin%2Fgacha%2Frai_1.png"
      />
      <MarkerCustom
        xy={[423.7036209106445,560.400337219238]}
        icon="https://img.gamewith.jp/article_tools%2Fgenshin%2Fgacha%2Frai_2.png"
      />
      </Map>
  </div>
)
}

export default MapComponent;