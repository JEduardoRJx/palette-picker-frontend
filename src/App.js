import React, { Component } from 'react';
import './App.scss';
import { Header } from '../src/containers/Header/Header';
import { Main } from '../src/containers/Main/Main';
import { ColorContainer } from '../src/containers/ColorContainer/ColorContainer';

export class App extends Component {

  async componentDidMount() {
    await fetch(process.env.REACT_APP_BACKEND_URL + '/')
  }

  render() {
    return (
      <div>
        <Header />
        <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
        <Main />
        <ColorContainer />
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