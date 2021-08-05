import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import TranslateIcon from '@material-ui/icons/Translate';
import React, { useState } from 'react';

function LanguageSelector({ t, i18n }) {
  const [value, setValue] = useState(i18n.language);

  const handleChange = (event) => {
    setValue(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  return (
    <FormControl>
      <InputLabel id='select-languages-label' shrink>{t('language')}</InputLabel>
      <Select
        labelId='select-languages-label'
        id='select-language'
        value={value}
        onChange={handleChange}
        IconComponent={TranslateIcon}
      >
        <MenuItem value='en'>English</MenuItem>
        <MenuItem value='vi'>Tiếng Việt</MenuItem>
      </Select>
    </FormControl>
  );
}

export default LanguageSelector;
