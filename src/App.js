import React, { Component } from 'react';
import './App.scss';
import { Header } from '../src/containers/Header/Header';
import { Main } from '../src/containers/Main/Main';
import { ColorContainer } from '../src/containers/ColorContainer/ColorContainer';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      colors: []
    }
  }

  async componentDidMount() {
    this.randomizeColors()
    await fetch(process.env.REACT_APP_BACKEND_URL + '/')
  }

  randomizeColors = () => {
    let colors = [];
    while (colors.length < 5) {
      let randomColor = '#000000'.replace(/0/g, () => {
        return (~~(Math.random()*16)).toString(16)
      })
      colors.push({ color: randomColor, isLocked: false })
    }
    this.setState({ colors })
  }

  render() {
    const { colors } = this.state
    return (
      <div>
        <Header />
        <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
        <Main randomizeColors={this.randomizeColors}/>
        <ColorContainer colors={colors}/>
      </div>
    )
  }
} 

export default App;

 // Component.propTypes = {
  //   prop1: PropTypes.array.isRequired,
  //   prop2: PropTypes.any,
  //   prop3: PropTypes.func.isRequired,
  //   prop4: PropTypes.bool,
  //   prop5: PropTypes.string.isRequired,
  //   prop6: PropTypes.number
  // }