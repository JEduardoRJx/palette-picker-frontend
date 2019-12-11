import React, { Component } from 'react';
import './App.scss';
import { Header } from '../src/containers/Header/Header';
import { Main } from '../src/containers/Main/Main';
import { ColorContainer } from '../src/containers/ColorContainer/ColorContainer';
import { fetchData } from './utils/apiCalls';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      colors: []
    }
  }

  async componentDidMount() {
    // await fetch(process.env.REACT_APP_BACKEND_URL + '/')
    this.randomizeColors()
    try {
      const data = await fetch(process.env.REACT_APP_BACKEND_URL + '/')
      // console.log("data", data)
      const baseUrl = process.env.REACT_APP_BACKEND_URL + '/'
      const defaultUserURL = 'api/v1/2/projects';
      const defaultUser = await fetch(`${baseUrl}${defaultUserURL}`)
      console.log("default", defaultUser)
      // defaultUser will come back successfully however, I am getting "readable stream" when I try to log defaultUser.body //
    } catch(error) {

    }
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

  toggleLock = (e) => {
    // BUG CODE:
    // If you click anywhere else in the colorCard the app will break
    // unless you click on the button icon
    // potential conditial needed
    const target = e.target.nextElementSibling.innerText;
    console.log(target)
    const cards = this.state.colors.map(color => {
      console.log('color', color)
      if (color.color === target.toLowerCase()) {
        return {color: color.color, isLocked: !color.isLocked};
      }
      return color;
    });
    console.log("cards", cards)
    this.setState({ colors: cards })
  }

  render() {
    console.log(this.state)
    const { colors } = this.state
    return (
      <div>
        <Header />
        <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
        <Main randomizeColors={this.randomizeColors}/>
        <ColorContainer colors={colors} toggleLock={this.toggleLock} />
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