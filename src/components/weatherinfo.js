import React from 'react';
import PropTypes from 'prop-types';

import Loader from './loader';
import Error from './error';
import WeatherView from './weatherView';

const WeatherInfo = ({ city, country, temp, sunset, sunrise, pressure, loading, error }) => (
  <div className="infoWeath">
    {city && <WeatherView city={city} country={country} temp={temp} sunset={sunset} sunrise={sunrise} pressure={pressure} />}
    {loading && <Loader />}
    {error && <Error error={error} />}
  </div>
);

WeatherInfo.propTypes = {
  city: PropTypes.string,
  country: PropTypes.string,
  temp: PropTypes.string,
  sunrise: PropTypes.string,
  sunset: PropTypes.string,
  pressure: PropTypes.number,
  loading: PropTypes.bool,
  error: PropTypes.string
};

WeatherInfo.defaultProps = {
  city: '',
  country: '',
  temp: '',
  sunrise: '',
  sunset: '',
  pressure: 0,
  loading: false,
  error: ''
};

export default WeatherInfo;
