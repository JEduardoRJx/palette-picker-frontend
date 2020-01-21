import React, { Component } from 'react';
import './ProjectsContainer.scss';
import trash from '../../images/trash.svg'


export const ProjectsContainer = ({ deleteProject, deletePalette, projects, palettes }) => {
  const displayProjects = projects.map(project => {
    const displayPalettes = palettes.flat().map(palette => {
      if(palette.project_id === project.id) {
        return (
          <div className='palette' key={palette.id}>
              <div className='palette-name-wraper' id={`${palette.id}`}>
                <h3>{palette.palette_name}</h3>
                <button className='delete-btn palette-trash' 
                  type='button' 
                  id={`${palette.id}`}
                  onClick={(e) => deletePalette(e)}>
                <img className={`delete-icon palette-trash ${palette.project_id}`} src={trash} id={`${palette.id}`} alt={`Trash can for deleting this palette with id of ${palette.id}`} />
                </button>
              </div>
              <div className='color-wrapper'>
                <div className='color' style={{backgroundColor: palette.color1}}></div>
                <div className='color' style={{backgroundColor: palette.color2}}></div>
                <div className='color' style={{backgroundColor: palette.color3}}></div>
                <div className='color' style={{backgroundColor: palette.color4}}></div>
                <div className='color' style={{backgroundColor: palette.color5}}></div>
              </div>
          </div>
        )
      }
    })
    return (
      <div className='individual-project project' id={project.id} key={project.id}>
        <div className='project-name-wrapper'>
          <h2 className='project-name'>{project.project_name}</h2>
          <button className='delete-btn project-trash' 
            type='button' 
            id={`${project.id}`}
            onClick={(e) => deleteProject(e)}>
          <img className='delete-icon project-trash' src={trash} id={project.id} alt={`Trash can for deleting this palette with id of ${project.id}`}/>
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