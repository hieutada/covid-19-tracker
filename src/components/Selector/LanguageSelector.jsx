import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSelector() {
  const { i18n } = useTranslation();
  const [value, setValue] = useState(i18n.language);

  const handleChange = (event) => {
    setValue(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  return (
    <select
      style={{
        border: 'none',
        fontSize: '16px',
        color: 'inherit',
        outline: 'none',
        backgroundColor: 'inherit',
      }}
      value={value}
      onChange={handleChange}
    >
      <option value='en'>ENG</option>
      <option value='vi'>VIE</option>
    </select>
  );
}

export default LanguageSelector;
