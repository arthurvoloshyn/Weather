import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import WeatherInfo from "./components/weatherinfo";
import { ClipLoader } from 'react-spinners';
import { override } from './css/style'
import './style.css';

const API_KEY = "df382371f71a920bf67ae5a538a05596";

class Weather extends React.Component {

	state = {
		temp: undefined,
		city: undefined,
		country: undefined,
		sunrise: undefined,
		sunset: undefined,
		pressure: undefined,
		error: undefined,
		loading: false
	}

	gettingWeather = async (e) => {
		e.preventDefault();
		const city = e.target.elements.city.value;

		if(city) {

			this.setState({
				loading: true
			});

			const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
			const data = await api_url.json();

			var date = new Date();

			var sunset = data.sys.sunset;
			date.setTime(sunset);
			var sunset_date = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

			var sunrise = data.sys.sunrise;
			date.setTime(sunrise);
			var sunrise_date = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();


			this.setState({
				temp: data.main.temp,
				city: data.name,
				country: data.sys.country,
				sunrise: sunrise_date,
				sunset: sunset_date,
				pressure: data.main.pressure,
				error: undefined,
				loading: false
			});

		} else {

			this.setState({
				temp: undefined,
				city: undefined,
				country: undefined,
				sunrise: undefined,
				sunset: undefined,
				pressure: undefined,
				error: "Enter the city name",
				loading: false
			});
		}
	}

	render () {
		return (
			<div className="sweet-loading">
	       <ClipLoader
		       css={override}
		       sizeUnit={"px"}
		       size={150}
		       color={'#fff'}
		       loading={this.state.loading}
	        />

					<div className="wrapper">
						<div className="main">
							<div className="container">
								<div className="row">
									<div className="col-sm-5 info">
										<Info />
									</div>

									<div className="col-sm-7 form">
										<Form weatherWethod={this.gettingWeather} />

										<WeatherInfo
											temp={this.state.temp}
											city={this.state.city}
											country={this.state.country}
											sunrise={this.state.sunrise}
											sunset={this.state.sunset}
											pressure={this.state.pressure}
											error={this.state.error}
										 />
									</div>
								</div>
							</div>
						</div>
					</div>
        </div>
		);
	}
}

export default Weather;
