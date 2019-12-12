import React from 'react';
import { shallow } from 'enzyme';
import ColorContainer from './ColorContainer'

describe('ColorContainer', () => {
  const mockColor = [{
    color: "#cecccc",
    isLocked: false
  }]

  it('should match the snapshot ', () => {
    const wrapper = shallow(<ColorContainer
      colors={mockColor} 
      toggleLock={jest.fn()}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});