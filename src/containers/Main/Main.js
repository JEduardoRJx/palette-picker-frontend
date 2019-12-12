import React from 'react';
import { ProjectForm } from '../ProjectForm/ProjectForm';
import { ActionContainer } from '../ActionContainer/ActionContainer';
import { PaletteForm } from '../PaletteForm/PaletteForm';
import './Main.scss';
// import PropTypes from 'prop-types';

export const Main = ({ randomizeColors, projects }) => {
  console.log("in Main - Projects", projects)
  return (
    <section className="main-section"> 
    <ProjectForm projects={projects}/>
    <ActionContainer randomizeColors={randomizeColors}/>
    <PaletteForm />
    </section>
  )
}

export default Main;