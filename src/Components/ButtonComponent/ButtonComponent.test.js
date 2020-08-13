import React from 'react';
import { shallow } from 'enzyme';
import WeatherButton from './ButtonComponent';

xdescribe('ButtonComponent', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<WeatherButton />);
    });
})