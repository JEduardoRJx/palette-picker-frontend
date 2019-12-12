import React from 'react';
import { shallow } from 'enzyme';
import { ProjectForm } from './ProjectForm'

describe('ProjectForm ', () => {
  const mockProjects = [
    {
      id: 3,
      project_name: "spring",
      user_id: 1,
      created_at: "2019-12-10T04:14:29.628Z",
      updated_at: "2019-12-10T04:14:29.628Z"
    }
  ]

  it('should match the snapshot ', () => {
    const wrapper = shallow(<ProjectForm 
      projects={mockProjects}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});