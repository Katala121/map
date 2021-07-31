import React from 'react';
import './style.css';

const MarkerItem = ({text, imageSrc, id}) => {
  return (
    <div className="marker_item">
      <div className="marker_item__image">
        <a href={imageSrc} target="_blank">
          <div>
            <img src={imageSrc} alt="image" />
          </div>
          <div className="marker_item__image__button">
          <svg width="10" height="10" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
          <span>Enlarge</span>
          </div>
        </a>
      </div>
      <div className="marker_item__text">
        {text}
      </div>
      <div className="marker_item__checkbox">
        <input type="checkbox" className="marker_item__checkbox_input" id={`marker_item__checkbox-${id}`}/>
        <label htmlFor="marker_item__checkbox-1"></label>
      </div>
    </div>
  )
}

export default MarkerItem;