import React, { Component } from 'react';
import './ProjectForm.scss'

export class ProjectForm extends Component {
  constructor(props) {
    super(props)
    console.log("under SUPER", props)
    this.state = {
      currentProject: {
        project_name: ''
      },
      allProjects: [],
      error: ''
    }
  }

  componentDidMount() {
    if ( this.props) {
      console.log("hiii")
      this.setState({ allProjects: this.props.projects})
    }
  }

  handleChange = (e) => {
    this.setState({error: ''})
    let currentProject = this.state.currentProject;
    currentProject = { ...currentProject, [e.target.name]: e.target.value};
    this.setState({currentProject: currentProject})
  }

  render() {
    console.log("props", this.props)
    console.log("in Project Form ", this.state.allProjects)
    let { projects } = this.props;
    // console.log("props?", this.props)
    let projectNames = projects.map(currentProject => {
      return <option value={currentProject.project_name} key={currentProject.id}> {currentProject.project_name}  </option>
    })
    console.log("form: projectName", projectNames)
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
          { projectNames }
        </select>
      </section>
    )
  }
}


export default ProjectForm;