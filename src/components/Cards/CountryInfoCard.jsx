import { Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

CountryInfoCard.propTypes = {
  report: PropTypes.object,
};

function CountryInfoCard({ t, report }) {
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

export default CountryInfoCard;
