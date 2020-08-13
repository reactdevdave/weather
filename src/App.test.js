import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import WeatherDetails from './Components/WeatherDetailsComponent/WeatherDetailsComponent';

xdescribe('App JS', () => {
  it('APP component should render', () => {
    const wrapper = shallow(<App />);
    console.log(wrapper.instance());
    wrapper.render();
  });
  it('APP component should render WeatherDetails', () => {
    const wrapper = shallow(<App />);
    const weatherDetails = wrapper.find('weatherDetails');
    expect(weatherDetails.length).toBe(1);
  });
  it('APP component should render a form', () => {
    const wrapper = shallow(<App />);
    const form = wrapper.find('form');
    expect(form.length).toBe(1);
  });
  it('APP component input change value', () => {
    const wrapper = shallow(<App />);
    const input = wrapper.find('input')
    expect(input.at(0).prop('value')).toEqual('');
    console.log(input.debug());
  });
  it('APP component setState cityName', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ cityName: 'austin' });
    wrapper.update();
    const input = wrapper.find('input');
    expect(input.at(0).prop('value')).toBe('austin');
    console.log(input.debug());
  });
  it('Trigger inputChangeHandler', () => {
    const wrapper = shallow(<App />);
    const inputChangeHandler = jest.spyOn(wrapper.instance(), "inputChangeHandler");
    wrapper.instance().inputChangeHandler({ target: { value: 'dallas' } });
    expect(inputChangeHandler).toBeCalled();
    console.log('observe that cityName state has dallas as its new value, meaning the method inputChangeHandler ran correctly updating the state', wrapper.instance());
    expect(wrapper.state('cityName')).toBe('dallas');
  });
  it('Trigger sendFormData', () => {
    const wrapper = shallow(<App />);
    const sendFormData = jest.spyOn(wrapper.instance(), "sendFormData");
    wrapper.instance().sendFormData();
    expect(sendFormData).toBeCalled();
    console.log('Observe that the senFormt state value changed to true meaning the method sendFormData ra correctly', wrapper.instance());
    expect(wrapper.state('sentForm')).toBeTruthy();
  });
})
