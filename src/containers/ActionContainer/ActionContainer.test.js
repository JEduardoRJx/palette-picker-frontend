import React from 'react';
import { shallow } from 'enzyme';
import ActionContainer from './ActionContainer'

describe('ActionContainer', () => {
  it('should match the snapshot ', () => {
    const wrapper = shallow(<ActionContainer
      randomizeColors={jest.fn()}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});