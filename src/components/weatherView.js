import React from 'react';
import PropTypes from 'prop-types';

const WeatherView = ({ city, country, temp, sunset, sunrise, pressure }) => (
  <div>
    <p>
      Area is {city}, {country}
    </p>
    <p>Temperature is {temp}</p>
    <p>Sunset is {sunset}</p>
    <p>Sunrise is {sunrise}</p>
    <p>Pressure is {pressure}mm</p>
  </div>
);

WeatherView.propTypes = {
  city: PropTypes.string,
  country: PropTypes.string,
  temp: PropTypes.string,
  sunrise: PropTypes.string,
  sunset: PropTypes.string,
  pressure: PropTypes.number
};

WeatherView.defaultProps = {
  city: '',
  country: '',
  temp: '',
  sunrise: '',
  sunset: '',
  pressure: 0
};

export default WeatherView;
