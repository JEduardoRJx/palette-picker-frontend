import React, { Component } from 'react';
import '../../variables.scss'
import './PaletteForm.scss';

export class PaletteForm extends Component {
  constructor() {
    super()
    this.state = {
      currentPalette: {
        name: '',
        colors: []
      },
      allPalettes: [],
      error: ''
    }
  }
  render() {
    return (
      <section className="palette-details">
        <form className="palette-form">
          <input type="text" name="projectName" placeholder="Enter Palette Name"></input>
        </form>
        <select className="palette-select">
          <option value="Palette Name"> Select a Palette </option>
          <option value="Palette Name 1"> Palette 1 </option>
          <option value="Palette Name 2"> Palette 2 </option>
        </select>
      </section>
    )
  }
}

export default PaletteForm;
