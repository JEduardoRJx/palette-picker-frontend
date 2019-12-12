import React from 'react';
import { shallow } from 'enzyme';
import { ProjectsContainer } from './ProjectsContainer';

describe('ProjectsContainer ', () => {
  const mockPalettes = [
    [{
      id: 3,
      palette_name: "spring colors",
      project_id: 3,
      color1: "#CECCCC",
      color2: "#9D6381",
      color3: "#FDECEF",
      color4: "#0F110C",
      color5: "#612940",
      created_at: "2019-12-10T04:14:29.641Z",
      updated_at: "2019-12-10T04:14:29.641Z"
    }]
  ];

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
    const wrapper = shallow(<ProjectsContainer 
      palettes={mockPalettes}
      projects={mockProjects}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});