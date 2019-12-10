import React, { Component } from 'react';
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
        <select>
          <option value="Project Name"> Project Name </option>
          <option value="Project Name 1"> Project 1 </option>
          <option value="Project Name 2"> Project 2 </option>
        </select>
      </section>
    )
  }
}

export default PaletteForm;
