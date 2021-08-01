import React from 'react';
import './style.css';

const ResetMapButton = ({state, setState}) => {

  const resetMap = () => {
    console.log('reset')
    const resetState = state.map(item => {
      item.obtained = false;
      return item;
    });
    setState(resetState);
  }

  return (
    <button onClick={resetMap} className="reset_map_button">
      Reset Map
    </button>
  )
}

export default ResetMapButton;