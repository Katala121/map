import React from 'react';
import L from 'leaflet';
import { Marker, Popup } from 'react-leaflet';

const MarkerCustom = ({xy, icon, id}) => {

  const inputObtained = React.useRef(null);

  const onChangeForm = () => {
    if ( inputObtained.current ) {
      if (inputObtained.current.checked) {
        document.querySelector(`.leaflet-div-icon-${id}`).classList.add('obtained');
      } else {
        document.querySelector(`.leaflet-div-icon-${id}`).classList.remove('obtained');
      }
    }
  }


  const Icon = new L.Icon({
    iconUrl: icon,
    iconRetinaUrl: null,
    iconAnchor: null,
    popupAnchor: [0, -8],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(20, 20),
    className: `leaflet-div-icon-${id}`
});

  return (
    <Marker position={xy} draggable={false} icon={Icon}>
      <Popup>
        <div>
          <a href="javascript:void(0)" rel={id} className="w-scroll-achievement-link">★See How To Get</a>
          <form
            className="popup_inputs"
            action="#"
            onChange={onChangeForm}
          >
            <input type="radio" name={`mapToDo-${id}`} id={`mapToDo-${id}-0`} defaultChecked/>
            <label htmlFor={`mapToDo-${id}-0`}>Not obtained</label>
            <input type="radio" name={`mapToDo-${id}`} id={`mapToDo-${id}-1`} ref={inputObtained}/>
            <label htmlFor={`mapToDo-${id}-1`}>Obtained</label>
          </form>
        </div>
      </Popup>
    </Marker>
  )
}


export default MarkerCustom;
