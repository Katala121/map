import L from 'leaflet';
import { Marker, Popup } from 'react-leaflet';

const MarkerCustom = ({xy, icon}) => {

  const Icon = new L.Icon({
    iconUrl: icon,
    iconRetinaUrl: null,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(20, 20),
    className: 'leaflet-div-icon'
});

  return (
    <Marker position={xy} draggable={false} icon={Icon}>
      <Popup>Marker</Popup>
    </Marker>
  )
}


export default MarkerCustom;