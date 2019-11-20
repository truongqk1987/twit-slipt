import React from 'react';
import { shallow } from 'enzyme';
import Component from './Message';

it('renders without crashing', () => {
  shallow(<Component />);
});