import React, { Component } from 'react';
import '../../variables.scss'
import './PaletteForm.scss';

export class PaletteForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPalette: '',
      colors: [],
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
    const { palettes, currentProjectId } = this.props;
    const paletteNames = palettes.flat().map(currentPalette => {
      if (currentPalette.project_id === parseInt(currentProjectId)) {
        return <option value={currentPalette.palette_name} key={currentPalette.id}> {currentPalette.palette_name} </option>
      } else {
        return 
      }
    })
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
          {paletteNames}
        </select>
      </section>
    )
  }
}

export default PaletteForm;
