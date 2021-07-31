import L from 'leaflet';
import { Marker, Popup } from 'react-leaflet';
// import icon from '../../../images/rai.png';

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
    <div className="marker_custom">
      <Marker position={xy} draggable={true} icon={Icon} className="marker_custom__icon">
        <Popup>Marker</Popup>
      </Marker>
    </div>
  )
}


export default MarkerCustom;