import React, { Component } from 'react';
import './ProjectForm.scss'

export class ProjectForm extends Component {
  constructor() {
    super()
    this.state = {
      currentProject: {
        name: ''
      },
      allProjects: [],
      error: ''
    }
  }
  render() {
    return (
      <section className="project-details">
        <form className="project-form">
         <input type="text" name="projectName" placeholder="Enter Project Name"></input>
        </form>
        <select className="project-select">
          <option value="Project Name"> Project Name </option>
          <option value="Project Name 1"> Project 1 </option>
          <option value="Project Name 2"> Project 2 </option>
        </select>
      </section>
    )
  }
}


export default ProjectForm;