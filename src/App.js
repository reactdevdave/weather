import React, { Component } from 'react';
import WeatherDetails from './Components/WeatherDetailsComponent/WeatherDetailsComponent';
import WeatherButton from './Components/ButtonComponent/ButtonComponent';

import axios from 'axios';
import './App.css';

class App extends Component {

  state = {
    cityName: '',
    sentForm: false,
    cityWeather: {},
    myNewWeather: []
  }

  componentDidMount() {
    axios.get('weather.json')
      .then(res => {
        const cityWeather = res.data;
        this.setState({ cityWeather });
      })
  }

  inputChangeHandler = (event) => {

    let userCity = event.target.value;
    const newWeather = { ...this.state.cityWeather };
    let myNewWeatherData;
    let newCitiesArray = [];
    for (let value of Object.values(newWeather)) {
      myNewWeatherData = { ...value };
      for (let value of Object.values(myNewWeatherData)) {
        for (let i = 0; i < 2; i++) {
          if (value.cities[i].name == userCity) {
            newCitiesArray.push(value.cities[i].forecast)
            console.log("results", newCitiesArray, userCity);
          };
        }
      }
    }
    this.setState({
      cityName: event.target.value,
      myNewWeather: newCitiesArray
    })
  }

  sendFormData = () => {
    this.setState({
      sentForm: true
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Weather App</h1>
        <form>
          <label>
            <input type="text" value={this.state.cityName} onChange={this.inputChangeHandler} />
            Enter City
          </label>
          <WeatherButton buttonSubmit={this.sendFormData}>Submit</WeatherButton>
        </form>
        <WeatherDetails newCity={this.state.sentForm ? this.state.cityName : ''} weatherData={this.state.myNewWeather} />
      </div>
    );
  }
}

export default App;
