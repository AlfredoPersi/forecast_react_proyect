import React, { useState } from 'react';

const apiKeyValue = 'ECLxqSun1JDwQ3ndo8uxvN5VAJTEnNSl';

const AccuweatherAPI = () => {
  const getAucompleteSearch = (text) => {
    const response = fetch(
      'http://dataservice.accuweather.com/locations/v1/cities/autocomplete?' +
        new URLSearchParams({
          apikey: apiKeyValue,
          q: text,
          language: 'es-ES',
        }),
    ).then((response) => response.json());

    return response;
  };

  const getDailyForecasts = (locationId) => {
    const response = fetch(
      `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${locationId}?` +
        new URLSearchParams({
          apikey: apiKeyValue,
          language: 'es-ES',
        }),
    ).then((response) => response.json());

    return response;
  };

  return {
    getAucompleteSearch,
    getDailyForecasts,
  };
};

export default AccuweatherAPI;
