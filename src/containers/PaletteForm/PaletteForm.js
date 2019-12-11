import React, { Component } from 'react';
import '../../variables.scss'
import './PaletteForm.scss';

export class PaletteForm extends Component {
  constructor() {
    super()
    this.state = {
      currentPalette: {
        palette_name: '',
        colors: []
      },
      allPalettes: [],
      error: ''
    }
  }

  handleChange = (e) => {
    this.setState({error: ''})
    let currentPalette = this.state.currentPalette;
    currentPalette = { ...currentPalette, [e.target.name]: e.target.value};
    this.setState({currentPalette: currentPalette})
  }

  render() {
    return (
      <section className="palette-details">
        <form className="palette-form">
          <input 
            type="text" 
            name="palette_name" 
            placeholder="Enter Palette Name"
            value = {this.state.name}
            onChange = {this.handleChange}
          />
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
