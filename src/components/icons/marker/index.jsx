import React from 'react';
import L from 'leaflet';
import { Marker, Popup } from 'react-leaflet';

const MarkerCustom = ({xy, icon, id, obtained, changeState}) => {

  const inputObtained = React.useRef(null);

  const onChangeForm = () => {
    if ( inputObtained.current ) {
      const obj = {
        id: id,
        obtained: inputObtained.current.checked,
      }
      changeState(obj)
    }
  }

  const onOpenPopup = () => {
    if (obtained) {
      document.querySelector(`.leaflet-div-icon-${id}`).classList.add('obtained');
      if (document.querySelector(`#mapToDo-${id}-1`)) {
        document.querySelector(`#mapToDo-${id}-1`).checked = true;
        document.querySelector(`#mapToDo-${id}-0`).checked = false;
      }
    } else {
      document.querySelector(`.leaflet-div-icon-${id}`).classList.remove('obtained');
      if (document.querySelector(`#mapToDo-${id}-1`)) {
        document.querySelector(`#mapToDo-${id}-1`).checked = false;
        document.querySelector(`#mapToDo-${id}-0`).checked = true;
      }
    }
  }

  React.useEffect(() => {
    if (obtained) {
      console.log(`${id}  ${obtained}`)
      document.querySelector(`.leaflet-div-icon-${id}`).classList.add('obtained');
      if (document.querySelector(`#mapToDo-${id}-1`)) {
        document.querySelector(`#mapToDo-${id}-1`).checked = true;
        document.querySelector(`#mapToDo-${id}-0`).checked = false;
      }
    } else {
      document.querySelector(`.leaflet-div-icon-${id}`).classList.remove('obtained');
      if (document.querySelector(`#mapToDo-${id}-1`)) {
        document.querySelector(`#mapToDo-${id}-1`).checked = false;
        document.querySelector(`#mapToDo-${id}-0`).checked = true;
      }
    }
  },[obtained])

  const Icon = new L.Icon({
    iconUrl: icon,
    iconRetinaUrl: null,
    iconAnchor: null,
    popupAnchor: [0, -8],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(20, 20),
    className: obtained ? `leaflet-div-icon-${id} obtained` : `leaflet-div-icon-${id}`
});

  return (
    <Marker position={xy} draggable={false} icon={Icon}>
      <Popup onOpen={onOpenPopup}>
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
