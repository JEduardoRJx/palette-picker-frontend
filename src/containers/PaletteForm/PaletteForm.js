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

  handleChange = async (e) => {
    this.setState({error: ''})
    await this.setState({[e.target.name]: e.target.value})
    let { trackCurrentPalette } = this.props;
    trackCurrentPalette(this.state.currentPalette)
  }

  handleDropDownChange = async (e) => {
    await this.setState({ currentPalette: e.target.value})
    let { trackCurrentPalette } = this.props;
    trackCurrentPalette(this.state.currentPalette)
  }

  render() {
    const { palettes, currentProjectId } = this.props;
    const paletteNames = palettes.flat().map(currentPalette => {
      if (currentPalette.project_id === parseInt(currentProjectId)) {
        return <option value={currentPalette.palette_name} key={currentPalette.id}> {currentPalette.palette_name} </option>
      } else {
        return;
      }
    })
    return (
      <section className="palette-details">
        <form className="palette-form">
          <input 
            type="text" 
            name="currentPalette" 
            placeholder="Enter Palette Name"
            value = {this.state.name}
            onChange = {this.handleChange}
          />
        </form>
        <select className="palette-select" onChange={(event) => this.handleDropDownChange(event)}>
          <option value="Palette Name"> Select a Palette </option>
          {paletteNames}
        </select>
      </section>
    )
  }
}

export default PaletteForm;
