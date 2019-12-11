import React from 'react';
import './ActionContainer.scss';
import logo from '../../colorwheel.png'

export const ActionContainer = ({ randomizeColors }) => {
  return (
    <section className="action-container">
      <img src={logo} alt="Tone Zone logo, a color wheel" className="logo"/>
      <button className="randomize-btn"
        onClick={() => randomizeColors()}> Randomize </button>
      <button className="save-btn"> SAVE </button>
    </section>
  )
}

export default ActionContainer;