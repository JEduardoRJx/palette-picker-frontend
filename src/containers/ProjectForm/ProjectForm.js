import React, { Component } from 'react';
import './ProjectForm.scss'

export class ProjectForm extends Component {
  constructor(props) {
    super(props)
    console.log("under SUPER", props)
    this.state = {
      currentProject: 'Select a project',
      error: ''
    }
  }

  // componentDidMount() {
  //   if ( this.props) {
  //     console.log("hiii")
  //     this.setState({ allProjects: this.props.projects})
  //   }
  // }

  handleInputChange = (e) => {
    this.setState({error: ''})
    let currentProject = this.state.currentProject;
    currentProject = { ...currentProject, [e.target.name]: e.target.value};
    this.setState({currentProject: currentProject})
  }

  handleDropDownChange = (e) => {
    console.log("in handle drop down", e.tar)
    this.setState({ currentProject: e.target.value})
  }

  render() {
    console.log("props", this.props)
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
          name="project_name" 
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