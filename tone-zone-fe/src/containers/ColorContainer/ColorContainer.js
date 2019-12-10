import React from 'react';
import { ColorCard } from '../ColorCard/ColorCard';
import './ColorContainer.scss';

export const ColorContainer = () => {
  return (
    <section className="color-container">
      <ColorCard />
      <ColorCard />
      <ColorCard />
      <ColorCard />
      <ColorCard />
    </section>
  )
}

export default ColorContainer;