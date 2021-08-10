import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { getInfomationCountry } from '../../../apis';
import { Box, Typography } from '@material-ui/core';

CountryInfo.propTypes = {
  report: PropTypes.object,
};

function CountryInfo({ t, report }) {
  return (
    <>
      {Object.keys(report).length > 0 ? (
        <Box>
          <img
            src={report.countryInfo.flag}
            alt={report.countryInfo.iso2}
            width='240px'
            style={{marginTop: '12px'}}
          />
          <Typography variant='h5'>{report.country}</Typography>
          <Typography>
            {t('region')}: {t(report.continent)}
          </Typography>
          <Typography>
            {t('population')}:{' '}
            {new Intl.NumberFormat('vi-VN').format(report.population)}
          </Typography>
        </Box>
      ) : (
        ''
      )}
    </>
  );
}

export default CountryInfo;
