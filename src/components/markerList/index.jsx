import React from 'react';
import MarkerItem from '../markerItem';

const MarkerList = () => {
  return (
    <div className="marker_list">
      <MarkerItem 
        id={1}
        text="1.At the highest point of the island. (Climb a trea to obtain.)"
        imageSrc="https://img.gamewith.jp/img/original_ca5fe32cd05e3155297bbd7c0793381b.jpg"/>
    </div>
  )
}

export default MarkerList;