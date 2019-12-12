import React, { Component } from 'react';
import './ProjectsContainer.scss';
import trash from '../../images/trash.svg'


export const ProjectsContainer = ({ deleteProject, deletePalette, projects, palettes }) => {
  console.log('2', palettes)
  const displayPalettes = palettes.map(palette => {
    return (
      <div className='palette' key={palette[0].id}>
          <div className='palette-name-wraper' id={`${palette.id}`}>
            <h3>{palette[0].palette_name}</h3>
            <button className='delete-btn palette-trash' 
              type='button' 
              id={`${palette[0].id}`}
              onClick={(e) => deletePalette(e)}>
            <img className='delete-icon palette-trash' src={trash} id={`${palette[0].id}`} />
            </button>
          </div>
          <div className='color-wrapper'>
            <div className='color' style={{backgroundColor: palette[0].color1}}></div>
            <div className='color' style={{backgroundColor: palette[0].color2}}></div>
            <div className='color' style={{backgroundColor: palette[0].color3}}></div>
            <div className='color' style={{backgroundColor: palette[0].color4}}></div>
            <div className='color' style={{backgroundColor: palette[0].color5}}></div>
          </div>
      </div>
    )
  })

  const displayProjects = projects.map(project => {
    return (
      <div className='individual-project project' id={project.id} key={project.id}>
        <div className='project-name-wrapper'>
          <h2 className='project-name'>{project.project_name}</h2>
          <button className='delete-btn project-trash' 
            type='button' 
            id={`${project.id}`}
            onClick={(e) => deleteProject(e)}>
          <img className='delete-icon project-trash' src={trash} id={project.id} />
          </button>
        </div>
          {displayPalettes}
      </div>
    )
  })

  return (
    <section className='projects-container'>
      {displayProjects}
    </section>
  )
}