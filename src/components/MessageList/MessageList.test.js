import React from 'react';
import { shallow } from 'enzyme';
import Component from './MessageList';

it('renders without crashing', () => {
  shallow(<Component />);
});