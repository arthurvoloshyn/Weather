import React from 'react';

const WeatherInfo = ({ city, country, temp, sunset, sunrise, pressure, loading, error }) => (
 	<div className='infoWeath'>
 		{city &&
	 		<div>
 				<p>Area is {city}, {country}</p>
 				<p>Temperature is {temp}</p>
 				<p>Sunset is {sunset}</p>
        <p>Sunrise is {sunrise}</p>
 				<p>Pressure is {pressure}mm</p>
 			</div>
 		}
    {loading &&
      <div className='text-center'>
        <div className='spinner-border' role='status'>
          <span className='sr-only'>Loading...</span>
        </div>
      </div>
    }
 		<p className='error'>{error}</p>
 	</div>
);

export default WeatherInfo;
