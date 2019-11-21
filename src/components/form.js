import React from 'react';

const Form = ({ weatherWethod }) => (
	<form onSubmit={weatherWethod}>
		<input type='text' name='city' placeholder='Enter the name of the city...' required />
		<button type="submit">Get the weather</button>
	</form>
);

export default Form;
