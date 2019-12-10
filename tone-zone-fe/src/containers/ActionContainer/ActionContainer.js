import React from 'react';
import './ActionContainer.scss';

export const ActionContainer = () => {
  return (
    <section className="action-container">
      <p> Logo </p>
      <button className="randomize-btn"> Randomize </button>
      <button className="save-btn"> SAVE </button>
    </section>
  )
}

export default ActionContainer;