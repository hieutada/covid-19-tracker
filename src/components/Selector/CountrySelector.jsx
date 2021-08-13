import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import titleCase from '../../utils/titleCase';

CountrySelector.propTypes = {
  value: PropTypes.string,
  handleOnChange: PropTypes.func,
  countries: PropTypes.array,
};

function CountrySelector({ value, handleOnChange, countries }) {
  const { t } = useTranslation();

  const countriesList = countries.sort((a, b) =>
    a.Country.localeCompare(b.Country)
  );

  return (
    <FormControl>
      <InputLabel id='country-select-label' shrink>
        {titleCase(t('country'))}
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
      <FormHelperText>{t('country_heper_text')}</FormHelperText>
    </FormControl>
  );
}

export default CountrySelector;
