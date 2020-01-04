import React, { Component } from 'react';

import { timeConversion, tempConversion, InitialState } from '../utils';

import Constants from '../constants';

import Info from '../components/info';
import Form from '../components/form';
import WeatherInfo from '../components/weatherInfo';

import './css/Weather.css';

const { BASE_PATH, WEATHER_PATH, WEATHER_PARAM, API_ID, API_KEY, UNITS_NAME, UNITS_PARAM } = Constants;

class Weather extends Component {
  state = {
    ...new InitialState()
  };

  gettingWeather = e => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    this.setState({
      ...new InitialState(),
      loading: true
    });

    fetch(`${BASE_PATH}${WEATHER_PATH}?${WEATHER_PARAM}${city}&${API_ID}${API_KEY}&${UNITS_NAME}${UNITS_PARAM}`)
      .then(res => res.json())
      .then(result => this.settingWeather(result))
      .catch(error => this.gettingError(error));
  };

  settingWeather = data => {
    if (data.id) {
      const {
        main: { temp, pressure },
        sys: { country, sunset, sunrise },
        name
      } = data;
      const sunsetDate = timeConversion(sunset);
      const sunriseDate = timeConversion(sunrise);
      const modifiedTemp = tempConversion(temp);

      this.setState({
        ...new InitialState(),
        temp: modifiedTemp,
        city: name,
        country,
        sunrise: sunriseDate,
        sunset: sunsetDate,
        pressure
      });
    } else {
      const { message } = data;

      this.gettingError(message);
    }
  };

  gettingError = error => {
    this.setState({
      ...new InitialState(),
      error
    });
  };

  render() {
    const { loading, temp, city, country, sunset, sunrise, pressure, error } = this.state;

    return (
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 info">
                <Info />
              </div>

              <div className="col-sm-7 form">
                <Form weatherWethod={this.gettingWeather} />

                <WeatherInfo temp={temp} city={city} country={country} sunset={sunset} sunrise={sunrise} pressure={pressure} loading={loading} error={error} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Weather;
