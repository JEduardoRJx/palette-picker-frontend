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
      currentUserId: 2,
      projects: [],
      palettes: [],
      colors: []
    }
  }

  async componentDidMount() {
    this.randomizeColors()
    try {
      const baseUrl = process.env.REACT_APP_BACKEND_URL + '/'
      const defaultUserProjectsUrl = 'api/v1/2/projects';
      const defaultUserProjects = await fetchData(`${baseUrl}${defaultUserProjectsUrl}`)
      console.log("default", defaultUserProjects)
      this.setState({ projects: defaultUserProjects })
      console.log("State", this.state.projects)
      this.fetchHelper()
    } catch(error) {

    }
  }

 fetchHelper = async () => {
    let palettes = this.state.projects.map(async (project) => {
      console.log("ID",project.id)
      let url = `${process.env.REACT_APP_BACKEND_URL}/api/v1/2/projects/${project.id}/palettes`
      console.log("url", url)
      let info = await fetchData(`${process.env.REACT_APP_BACKEND_URL}/api/v1/2/projects/${project.id}/palettes`)
      console.log("info", info)
      return info
    })
    console.log("PALETTES", Promise.all(palettes))
    this.setState({ palettes: await Promise.all(palettes)})
    console.log("STATEY- Palettes", this.state.palettes)
  
  }

  randomizeColors = () => {
    let colors = [];
    if (this.state.colors.length === 0) {
      while (colors.length < 5) {
        let randomColor = '#000000'.replace(/0/g, () => {
          return (~~(Math.random()*16)).toString(16)
        })
        colors.push({ color: randomColor, isLocked: false })
      }
      this.setState({ colors })
    } else {
      let newColors = this.state.colors.map(color => {
        if (color.isLocked === false) {
          let randomColor = '#000000'.replace(/0/g, () => {
                return (~~(Math.random()*16)).toString(16)
              })
            return { color: randomColor, isLocked: false };
        } else {
          return color;
        }
      })
      this.setState({ colors: newColors })
    }
  }

  toggleLock = (e) => {
    if (e.target.className === 'lock-icon') {
      const target = e.target.nextElementSibling.innerText;
      const cards = this.state.colors.map(color => {
        if (color.color === target.toLowerCase()) {
          return {color: color.color, isLocked: !color.isLocked};
        }
        return color;
      });
      this.setState({ colors: cards })
    }
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