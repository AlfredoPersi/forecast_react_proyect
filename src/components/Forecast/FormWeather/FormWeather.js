import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const FormWeather = (props) => {
  const [locations, setLocations] = useState([]);
  const [cityNameIn, setCityNameIn] = useState('');
  const [citySelected, setCitySelected] = useState('');

  var timeOutCustom;

  const onLocationTextChange = (value) => {
    setCityNameIn(value);

    timeOutCustom =
      timeOutCustom ||
      setTimeout(async () => {
        setLocations([]);
        if (cityNameIn != '') {
          setLocations(await props.autocompleteMethod(value));
        }
      }, 2000);
  };

  return (
    <Form onSubmit={(event) => event.preventDefault()}>
      <Form.Group className="mb-3 mt-3 w-25">
        <Form.Label>City</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter city name"
          value={cityNameIn}
          onChange={(event) => onLocationTextChange(event.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3 mt-3 w-25">
        <Form.Select
          aria-label="Default select example"
          value={citySelected}
          onChange={(event) => setCitySelected(event.target.value)}
        >
          <option>Select city</option>
          {locations.map((city) => (
            <option key={city.Key} value={city.Key}>
              {city.LocalizedName}, {city.AdministrativeArea.LocalizedName},{' '}
              {city.Country.LocalizedName}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Button
        variant="light"
        onClick={() => props.onClickSearchForecast(citySelected)}
      >
        Get Weather
      </Button>
    </Form>
  );
};

export default FormWeather;
