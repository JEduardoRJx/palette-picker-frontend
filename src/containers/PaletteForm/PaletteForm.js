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
    console.log("props", this.props)
    const { palettes, currentProjectId } = this.props;
    console.log("pale", typeof parseInt(currentProjectId))
    console.log("allPalettes", palettes.flat())
    const paletteNames = palettes.flat().map(currentPalette => {
      console.log("currentP", currentPalette)
      if (currentPalette.project_id === parseInt(currentProjectId)) {
        console.log("truuuuue")
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
          {/* <option value="Palette Name 1"> Palette 1 </option> */}
          {/* <option value="Palette Name 2"> Palette 2 </option> */}
        </select>
      </section>
    )
  }
}

export default PaletteForm;
