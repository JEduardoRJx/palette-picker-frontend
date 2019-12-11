import React from 'react';
import './ColorCard.scss';

export const ColorCard = ({ colorInfo }) => {
  const { color, isLocked} = colorInfo;
  return (
    <article className="color-card"
      style={{backgroundColor: color}}>
      
    </article>
  )
}

export default ColorCard;