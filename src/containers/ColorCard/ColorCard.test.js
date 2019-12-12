import React from 'react';
import { shallow } from 'enzyme';
import ColorCard from './ColorCard'

describe('ColorCard', () => {
  const mockColorInfo = {
    color: "#cecccc",
    isLocked: false
  }

  it('should match the snapshot ', () => {
    const wrapper = shallow(<ColorCard
      colorInfo={mockColorInfo} 
      toggleLock={jest.fn()}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});