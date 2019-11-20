import React, { Component } from 'react';
import Constants from '../constants';
import { timeConversion, tempConversion, initialState } from '../utils';
import Info from '../components/info';
import Form from '../components/form';
import WeatherInfo from '../components/weatherinfo';
import './css/Weather.css';

const { BASE_PATH, WEATHER_PATH, WEATHER_PARAM, API_ID, API_KEY, UNITS_NAME, UNITS_PARAM } = Constants;

class Weather extends Component {

	state = {
		...new initialState()
	}

	gettingWeather = async e => {
		e.preventDefault();
		const city = e.target.elements.city.value;

		this.setState({
			...new initialState(),
			loading: true
		});

		const api_url = await fetch(`${BASE_PATH}${WEATHER_PATH}?${WEATHER_PARAM}${city}&${API_ID}${API_KEY}&${UNITS_NAME}${UNITS_PARAM}`);
		const data = await api_url.json();

		if (data.id) {
			const { main: { temp, pressure }, sys: { country, sunset, sunrise }, name } = data;
			const sunset_date = timeConversion(sunset);
			const sunrise_date = timeConversion(sunrise);
			const modified_temp = tempConversion(temp);

			this.setState({
				...new initialState(),
				temp: modified_temp,
				city: name,
				country,
				sunrise: sunrise_date,
				sunset: sunset_date,
				pressure
			});
		} else {
			const { message } = data;

			this.setState({
				...new initialState(),
				error: message
			});
		}
	}

	render () {
		const { loading, temp, city, country, sunset, sunrise, pressure, error } = this.state;

		return (
			<div className='wrapper'>
				<div className='main'>
					<div className='container'>
						<div className='row'>
							<div className='col-sm-5 info'>
								<Info />
							</div>

							<div className='col-sm-7 form'>
								<Form weatherWethod={this.gettingWeather} />

								<WeatherInfo
									temp={temp}
									city={city}
									country={country}
									sunset={sunset}
									sunrise={sunrise}
									pressure={pressure}
									loading={loading}
									error={error}
								 />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Weather;
