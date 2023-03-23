import React from 'react';
import Image from 'react-bootstrap/Image';

const WeatherCardComponent = (props) => {
  const tempMin = props.dailyForecast
    ? convertFarenheitToCelcius(
        props.dailyForecast.Temperature.Minimum.Value,
      ).toFixed(1)
    : 0;
  const tempMax = props.dailyForecast
    ? convertFarenheitToCelcius(
        props.dailyForecast.Temperature.Maximum.Value,
      ).toFixed(1)
    : 0;

  return (
    <div className="card-item mt-2">
      <div className="image-div">
        <img
          className="card-item-image"
          src={iconOptions[props.dailyForecast.Day.Icon]}
        />
      </div>
      <hr />
      <h3>{props.dailyForecast.Day.IconPhrase}</h3>
      <div className="d-flex">
        Min:
        <h4>{tempMin}</h4>
      </div>
      <div className="d-flex">
        Max:
        <h4>{tempMax}</h4>
      </div>
    </div>
  );
};

const convertFarenheitToCelcius = (value) => {
  return ((value - 32) * 5) / 9;
};

const iconOptions = {
  1: '/icons/01-s.png',
  2: '/icons/02-s.png',
  3: '/icons/03-s.png',
  4: '/icons/04-s.png',
  5: '/icons/05-s.png',
  6: '/icons/06-s.png',
  7: '/icons/07-s.png',
  8: '/icons/08-s.png',
  11: '/icons/11-s.png',
  12: '/icons/12-s.png',
  13: '/icons/13-s.png',
  14: '/icons/14-s.png',
  15: '/icons/15-s.png',
  16: '/icons/16-s.png',
  17: '/icons/17-s.png',
  18: '/icons/18-s.png',
  19: '/icons/19-s.png',
  20: '/icons/20-s.png',
  21: '/icons/21-s.png',
  22: '/icons/22-s.png',
  23: '/icons/23-s.png',
  24: '/icons/24-s.png',
  25: '/icons/25-s.png',
  26: '/icons/26-s.png',
  29: '/icons/29-s.png',
  30: '/icons/30-s.png',
  31: '/icons/31-s.png',
  32: '/icons/32-s.png',
  33: '/icons/33-s.png',
  34: '/icons/34-s.png',
  35: '/icons/35-s.png',
  36: '/icons/36-s.png',
  37: '/icons/37-s.png',
  38: '/icons/38-s.png',
  39: '/icons/39-s.png',
  40: '/icons/40-s.png',
  41: '/icons/41-s.png',
  42: '/icons/42-s.png',
  43: '/icons/43-s.png',
  44: '/icons/44-s.png',
};

export default WeatherCardComponent;
