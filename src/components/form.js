import React from "react";

const Form = props => (

		<div className="form-block">
			<form onSubmit={props.weatherWethod}>
				<input type="text" name="city" placeholder="Endet the city..."/>
				<br className="br-form"/>
				<button>Get a weather</button>
			</form>
		</div>

)

export default Form;