import React, { Component } from 'react';
import './ProjectForm.scss'

export class ProjectForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentProject: '',
      error: ''
    }
  }

  handleInputChange = (e) => {
    this.setState({error: ''})
    this.setState({ [e.target.name]: e.target.value })
  }

  handleDropDownChange = (e) => {
    this.setState({ currentProject: e.target.value})
  }

  render() {
    // console.log("props", this.props)
    console.log("in Project Form ", this.state)
    let { projects } = this.props;
    // console.log("props?", this.props)
    let projectNames = projects.map(currentProject => {
      return <option value={currentProject.project_name} key={currentProject.id}> {currentProject.project_name}  </option>
    })
    return (
      <section className="project-details">
        <form className="project-form">
        <input 
          type="text" 
          name="currentProject" 
          placeholder="Enter Project Name" 
          value = {this.state.name}
          onChange = {this.handleInputChange}
          />
        </form>
        <select className="project-select" onChange={(event) => this.handleDropDownChange(event)}>
          <option value="Project Name"> Select a Project </option>
          { projectNames }
        </select>
      </section>
    )
  }
}


export default ProjectForm;