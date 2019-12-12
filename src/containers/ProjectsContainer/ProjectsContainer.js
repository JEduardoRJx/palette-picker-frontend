import React, { Component } from 'react';
import './ProjectsContainer.scss';
import trash from '../../images/trash.svg'


export const ProjectsContainer = ({ deleteProject, deletePalette }) => {


  return (
    <section className='projects-container'>
      <h1 className='project-name'>Select Project </h1>
      <div className='projects-wrapper'>
        {/* Display all projects here */}
        <div className='individual-project'>
          <h3 className='project-name'>Project Name</h3>
          <button className='delete-btn' 
            type='button' 
            id='project'
            onClick={(e) => deleteProject(e)}>
            <img className='delete-icon' src={trash} id='project' />
          </button>
        </div>
      </div>

      <div className='palettes-wrapper'>
        {/* display all palettes for a project here PALETTE COMPONENT*/}
        <div className='palette'>
          <div className='name-delete-wrapper'>
            <h3 className='palette-name'>Name</h3>
            <button className='delete-btn' type='button' id='palette'
              onClick={(e) => deletePalette(e)}>
              <img className='delete-icon' src={trash} id='palette' />
            </button>
          </div>
          {/* Colors */}
          <ul>
            <div className='color'></div>
            <div className='color'></div>
            <div className='color'></div>
            <div className='color'></div>
            <div className='color'></div>
          </ul>
        </div>
      </div>
    </section>
  )
}