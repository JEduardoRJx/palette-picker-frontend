import React from 'react';
import './ColorCard.scss';
import locked from '../../images/locked.svg';
import unlocked from '../../images/unlocked.svg';

export const ColorCard = ({ colorInfo, toggleLock }) => {
  const { color, isLocked} = colorInfo;
  console.log("Color", color)
  const icon = isLocked ? locked : unlocked;
  const description = isLocked ? 'locked icon' : 'unlocked icon'
  
  return (
    <article className="color-card"
      style={{backgroundColor: color}}>
      <button className='icon-btn' 
        type='button'
        onClick={e => toggleLock(e)}>
        <img className='lock-icon' src={icon} alt={description} />
      <h3 className='color-text'>{color.toUpperCase()}</h3>
      </button>
    </article>
  )
}

export default ColorCard;