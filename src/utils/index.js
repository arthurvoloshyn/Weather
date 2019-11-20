export const kelvinToCelsius = (celsius, round = 1) => (celsius - 273.15).toFixed(round);

export const timeConversion = sec => {
  const date = new Date(sec * 1000);
  const hours = date.getHours();
  const modifiedMinutes = `0${date.getMinutes()}`;
  const modifiedSeconds = `0${date.getSeconds()}`;
  const minutes = modifiedMinutes.substr(-2);
  const seconds = modifiedSeconds.substr(-2);

  return `${hours}:${minutes}:${seconds}`;
};

export const tempConversion = temp => (temp > 0 ? `+${temp}°C` : `${temp}°C`);

export class initialState {
  temp = undefined;
  city = undefined;
  country = undefined;
  sunset = undefined;
  sunrise =  undefined;
  pressure =  undefined;
  error =  undefined;
  loading =  false;
};
