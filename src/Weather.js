import React from "react";
import Info from "./components/info"
import Form from "./components/form"
import WeatherInfo from "./components/weatherinfo"
import './style.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Preload from 'react-preload';
import PropTypes from 'prop-types';
import { ClipLoader } from 'react-spinners';

const API_KEY = "df382371f71a920bf67ae5a538a05596";

var loadingIndicator = (<div className="preloader">Loading...</div>);
var images = [''];

const override = {
    display: 'block',
    borderColor: 'red',
    position: 'absolute',
  	top: '50%',
  	left: '50%',
 	marginRight: '-50%',
  	transform: 'translate(-50%, -50%)',
  	zIndex: '5'
}

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
				error: "Enter the name of city",
				loading: false
			});
		}
	}

	render () {
		return (
			<Preload
    			loadingIndicator={loadingIndicator}
    			images={images}
    			autoResolveDelay={1000}
    			onError={this._handleImageLoadError}
    			onSuccess={this._handleImageLoadSuccess}
    			resolveOnError={true}
    			mountChildren={true} 
			>
				<div className="sweet-loading">
	        		<ClipLoader
		        		css={override}
		          		sizeUnit={"px"}
		          		size={150}
		          		color={'#fff'}
		          		loading={this.state.loading}
	        		/>
	        	</div>
				<ReactCSSTransitionGroup transitionName="anim" transitionAppear={true} transitionAppearTimeout={2000} transitionEnter={false} transitionLeave={false}>
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
				</ReactCSSTransitionGroup>
			</Preload>
		);
	}
}

Weather.propTypes = {

    children: PropTypes.element.isRequired,

    loadingIndicator: PropTypes.node.isRequired, 
 
    images: PropTypes.array, 
 
    autoResolveDelay: PropTypes.number,
 
    onError: PropTypes.func,
 
    onSuccess: PropTypes.func,
 
    resolveOnError: PropTypes.bool, 
 
    mountChildren: PropTypes.bool
}

export default Weather;