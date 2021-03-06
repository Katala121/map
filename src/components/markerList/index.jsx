import React from 'react';
import MarkerItem from '../markerItem';

const MarkerList = ({state, setState}) => {

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
    state.map(item => {
      if (document.querySelector(`.text-${item.id}`)) {
        document.querySelector(`.text-${item.id}`).innerHTML = item.text;
      }

    })
  },[])

  return (
    <div className="marker_list">
      {
        state.map(item => {
          return <MarkerItem 
            id={item.id}
            key={item.id}
            text={item.text}
            changeState={changeState}
            imageSrc={item.imageSrc}
            obtained={item.obtained}
            />
          
        })
      }
    </div>
  )
}

export default MarkerList;