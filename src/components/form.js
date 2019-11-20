import React from 'react';

const Form = ({ weatherWethod }) => (
	<form onSubmit={weatherWethod}>
		<input type='text' name='city' placeholder='Endet the city...' required />
		<button type="submit">Get the weather</button>
	</form>
);

export default Form;
