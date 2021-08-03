import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem, Select
} from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types'

CountrySelector.propTypes = {
  value: PropTypes.string,
  handleOnChange: PropTypes.func,
  countries: PropTypes.array,
};

function CountrySelector({ value, handleOnChange, countries }) {

  const countriesList = countries.sort((a, b) =>
    a.Country.localeCompare(b.Country)
  );

  return (
    <FormControl style={{marginTop: 10, marginBottom: 10}}>
      <InputLabel id='country-select-label' shrink>
        Quốc gia
      </InputLabel>

      <Select
        labelId='country-select-label'
        id='country-selector'
        value={value}
        name='country'
        onChange={handleOnChange}
      >
        {countriesList.map((e) => (
          <MenuItem key={e.ISO2} value={e.ISO2.toLowerCase()}>
            <span
              className={`flag-icon flag-icon-squared flag-icon-${e.ISO2.toLowerCase()}`}
              style={{ marginRight: '8px' }}
            />
            {e.Country}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>Lựa chọn quốc gia</FormHelperText>
    </FormControl>
  );
}

export default CountrySelector;
