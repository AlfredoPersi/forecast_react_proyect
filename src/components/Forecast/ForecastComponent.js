import React, { useEffect, useState } from 'react';
import NavBarComponent from './Nav/NavBarComponent';
import Container from 'react-bootstrap/Container';
import AccuweatherAPI from './API/AccuweatherAPI';
import FormWeather from './FormWeather/FormWeather';
import WeatherCardComponent from './ItemCard/WeatherCardComponent';

const ForecastComponent = () => {
  const [getDailyForecast, setDailyForecast] = useState(null);

  const { getAucompleteSearch, getDailyForecasts } = AccuweatherAPI();

  const onSearchForecast = async (locationId) => {
    setDailyForecast(await getDailyForecasts(locationId));
  };

  useEffect(() => {
    console.log('effect detected');
  });

  return (
    <Container>
      <NavBarComponent />
      <div className="body-page"></div>
      <FormWeather
        autocompleteMethod={getAucompleteSearch}
        onClickSearchForecast={onSearchForecast}
      />
      {getDailyForecast && (
        <WeatherCardComponent
          dailyForecast={getDailyForecast.DailyForecasts[0]}
        />
      )}
    </Container>
  );
};

export default ForecastComponent;
