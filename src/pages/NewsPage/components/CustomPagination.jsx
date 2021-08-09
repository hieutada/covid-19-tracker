import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Pagination } from '@material-ui/lab';
import { useEffect } from 'react';
import { Box } from '@material-ui/core';

CustomPagination.propTypes = {};

function CustomPagination({page, onPageChange }) {

  const handleChange = (event, value) => {
    onPageChange(value)
  };

  return (
    <Box display='flex' justifyContent='center'>
      <Pagination count={10} page={page} onChange={handleChange} />
    </Box>
  );
}

export default CustomPagination;
