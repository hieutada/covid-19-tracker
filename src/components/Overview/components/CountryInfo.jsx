import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { getInfomationCountry } from '../../../apis';
import { Typography } from '@material-ui/core';

CountryInfo.propTypes = {
  slug: PropTypes.string,
};

function CountryInfo({ slug }) {
  const [info, setInfo] = useState({});

  useEffect(() => {
    if (slug) {
      getInfomationCountry(slug).then((res) => {
        setInfo(res.data);
      });
    }
  }, [slug]);

  return (
    <>
      {info ? (
        <>
          <img
            src={info.flag}
            alt={slug}
            width='240px'
            style={{ marginTop: 20 }}
          />
          <Typography variant='h5'>{info.name}</Typography>
          <Typography>Capital: {info.capital}</Typography>
          <Typography>Region: {info.region}</Typography>
          <Typography>
            Population: {new Intl.NumberFormat('vi-VN').format(info.population)}
          </Typography>
        </>
      ) : (
        ''
      )}
    </>
  );
}

export default CountryInfo;
