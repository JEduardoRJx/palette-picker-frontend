import React, { Component } from 'react';
import './ProjectsContainer.scss';


export const ProjectsContainer = () => {


  return (
    <section className='projects-container'>
      <h1 className='project-name'>Select Project </h1>
      <div className='projects-wrapper'>
        {/* Display all projects here */}
      </div>

      <div className='palettes-wrapper'>
        {/* display all palettes for a project here PALETTE COMPONENT*/}
      </div>
    </section>
  )
}