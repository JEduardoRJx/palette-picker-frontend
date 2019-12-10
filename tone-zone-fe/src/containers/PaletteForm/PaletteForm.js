import React, { Component } from 'react';

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
          Enter Palette Name: <input type="text" name="projectName"></input>
        <input type="submit"></input>
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
