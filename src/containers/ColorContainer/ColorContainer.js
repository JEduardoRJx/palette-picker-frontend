import React from 'react';
import { ColorCard } from '../ColorCard/ColorCard';
import './ColorContainer.scss';

export const ColorContainer = ({ colors }) => {
  const allColorCards = colors.map(color => {
    return <ColorCard 
    colorInfo={color} 
    key={color.color}/>
  })

  return (
    <section className="color-container">
      {allColorCards}
    </section>
  )
}

export default ColorContainer;