import React from 'react';
import './ActionContainer.scss';
import logo from '../../images/colorwheel.png'

export const ActionContainer = ({ randomizeColors, saveProject, errorMessage }) => {
  return (
    <section className="action-container">
      <img src={logo} alt="Tone Zone logo, a color wheel" className="logo"/>
      <button className="randomize-btn"
        onClick={() => randomizeColors()}> Randomize </button>
      <button className="save-btn"
        onClick={(event) => saveProject(event)}> SAVE </button>
      <p> {errorMessage} </p>
    </section>
  )
}

export default ActionContainer;