import React from 'react';
import { shallow } from 'enzyme';
import Component from './MessageError';

it('renders without crashing', () => {
  shallow(<Component />);
});