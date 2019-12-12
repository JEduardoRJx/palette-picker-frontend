import React from 'react';
import { ProjectForm } from '../ProjectForm/ProjectForm';
import { ActionContainer } from '../ActionContainer/ActionContainer';
import { PaletteForm } from '../PaletteForm/PaletteForm';
import './Main.scss';
// import PropTypes from 'prop-types';

export const Main = ({ randomizeColors, projects, palettes, trackCurrentProject, currentProjectId, trackCurrentPalette, saveProject, errorMessage }) => {
  console.log("in Main", errorMessage)
  return (
    <section className="main-section"> 
    <ProjectForm projects={projects} trackCurrentProject={trackCurrentProject}/>
    <ActionContainer randomizeColors={randomizeColors} saveProject={saveProject} errorMessage={errorMessage}/>
    <PaletteForm palettes={palettes} currentProjectId={currentProjectId} trackCurrentPalette={trackCurrentPalette} />
    </section>
  )
}

export default Main;