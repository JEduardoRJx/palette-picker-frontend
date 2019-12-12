import React from 'react';
import { shallow } from 'enzyme';
import { PaletteForm } from './PaletteForm'

describe('PaletteForm ', () => {
  it('should match the snapshot ', () => {
    const wrapper = shallow(<PaletteForm  />);
    expect(wrapper).toMatchSnapshot();
  });
});