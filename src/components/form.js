import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ weatherWethod }) => (
  <form onSubmit={weatherWethod}>
    <input type="text" name="city" placeholder="Enter the name of the city..." required />
    <button type="submit">Get the weather</button>
  </form>
);

Form.propTypes = {
  weatherWethod: PropTypes.func
};

Form.defaultProps = {
  weatherWethod: () => {}
};

export default Form;
