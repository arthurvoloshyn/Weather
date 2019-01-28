import React from "react";

const WeatherInfo = props => (

 		<div className="infoWeath">
 			{ props.city && 
	 			<div>
	 				<p>Area is {props.city}, {props.country}</p>
	 				<p>Temperature is {props.temp >= 0 ? '+' + props.temp : props.temp}°C</p>
	 				<p>Sunrise is {props.sunrise}</p>
	 				<p>Sunset is {props.sunset}</p>
	 				<p>Pressure is {props.pressure}mm</p>
	 			</div>
 			}
 			<p className="error">{props.error}</p>
 		</div>

);

export default WeatherInfo;