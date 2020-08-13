import React, { Component } from 'react';
import WeatherDetails from './Components/WeatherDetailsComponent/WeatherDetailsComponent';
import WeatherButton from './Components/ButtonComponent/ButtonComponent';

import './App.css';

class App extends Component {

  state = {
    cityName: '',
    sentForm: false
  }

  inputChangeHandler = (event) => {

    this.setState({
      cityName: event.target.value
    })
  }

  // pick up value in the form, save it in the state, take that prop and pass it to WeatherDetailsComponent

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
          <button type="submit" onClick={this.sendFormData}>Submit</button>
        </form>

        <WeatherDetails newCity={this.state.sentForm ? this.state.cityName : ''} />
      </div>
    );
  }
}

export default App;
