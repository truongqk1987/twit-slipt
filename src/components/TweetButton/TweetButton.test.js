import React from 'react';
import { shallow } from 'enzyme';
import Component from './TweetButton';

it('renders without crashing', () => {
  shallow(<Component />);
});