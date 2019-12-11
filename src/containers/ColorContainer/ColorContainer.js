import React from 'react';
import { ColorCard } from '../ColorCard/ColorCard';
import './ColorContainer.scss';

export const ColorContainer = ({ colors, toggleLock }) => {
  const allColorCards = colors.map(color => {
    console.log(color)
    return <ColorCard 
    colorInfo={color} 
    toggleLock={toggleLock}
    key={color.color} />
  })

  return (
    <section className="color-container">
      {allColorCards}
    </section>
  )
}

export default ColorContainer;