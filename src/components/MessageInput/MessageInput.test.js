import React from 'react';
import { shallow } from 'enzyme';
import Component from './MessageInput';

it('renders without crashing', () => {
  shallow(<Component />);
});