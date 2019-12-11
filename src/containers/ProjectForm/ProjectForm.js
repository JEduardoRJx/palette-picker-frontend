import React, { Component } from 'react';
import './ProjectForm.scss'

export class ProjectForm extends Component {
  constructor() {
    super()
    this.state = {
      currentProject: {
        project_name: ''
      },
      allProjects: [],
      error: ''
    }
  }

  handleChange = (e) => {
    this.setState({error: ''})
    let currentProject = this.state.currentProject;
    currentProject = { ...currentProject, [e.target.name]: e.target.value};
    this.setState({currentProject: currentProject})
  }

  render() {

    return (
      <section className="project-details">
        <form className="project-form">
        <input 
          type="text" 
          name="project_name" 
          placeholder="Enter Project Name" 
          value = {this.state.name}
          onChange = {this.handleChange}
          />
        </form>
        <select className="project-select">
          <option value="Project Name"> Select a Project </option>
          <option value="Project Name 1"> Project 1 </option>
          <option value="Project Name 2"> Project 2 </option>
        </select>
      </section>
    )
  }
}


export default ProjectForm;