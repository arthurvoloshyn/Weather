const addPadStart = string => string.padStart(2, '0');

export const kelvinToCelsius = (celsius, round = 1) => (celsius - 273.15).toFixed(round);

export const timeConversion = sec => {
  const date = new Date(sec * 1000);

  const seconds = addPadStart(`${date.getSeconds()}`);
  const minutes = addPadStart(`${date.getMinutes()}`);
  const hours = addPadStart(`${date.getHours()}`);

  return `${hours}:${minutes}:${seconds}`;
};

export const tempConversion = temp => (temp > 0 ? `+${temp}°C` : `${temp}°C`);

export class InitialState {
  temp = undefined;
  city = undefined;
  country = undefined;
  sunset = undefined;
  sunrise = undefined;
  pressure = undefined;
  error = undefined;
  loading = false;
}
