import React from 'react';
import { shallow, mount } from 'enzyme';
import WeatherDetails from './WeatherDetailsComponent';

xdescribe('WeatherDetailsComponent', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<WeatherDetails newCity="dallas" />);
        wrapper.render();
    });
    it('props passed down correctly', () => {
        const wrapper = mount(<WeatherDetails newCity="dallas" />);
        console.log(wrapper.props());
        expect(wrapper.prop('newcity')).toBe('dallas');
    })
})