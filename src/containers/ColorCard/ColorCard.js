import React from 'react';
import './ColorCard.scss';
import locked from '../../images/locked.svg';
import unlocked from '../../images/unlocked.svg';

export const ColorCard = ({ colorInfo }) => {
  const { color, isLocked} = colorInfo;
  const icon = isLocked ? locked : unlocked;
  const description = isLocked ? 'locked icon' : 'unlocked icon'
  
  return (
    <article className="color-card"
      style={{backgroundColor: color}}>
      <button class='icon-btn' type='button'>
        <img class='lock-icon' src={icon} alt={description} />
      <h3 class='color-text'>{color.toUpperCase()}</h3>
      </button>
    </article>
  )
}

export default ColorCard;