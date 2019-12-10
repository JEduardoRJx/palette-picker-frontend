import React from 'react';
import { ProjectForm } from '../ProjectForm/ProjectForm';
import { ActionContainer } from '../ActionContainer/ActionContainer';
// import PropTypes from 'prop-types';

export const Main = () => {

  return (
    <section className="main-section"> 
    <ProjectForm />
    <ActionContainer />
    </section>
  )
}

export default Main;