import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import HighlightCard from './components/HighlightCard';

Highlight.propTypes = {
  summary: PropTypes.array,
};

function Highlight({ summary }) {

  return (
    <Grid container spacing={3}>
      {summary.map((field, idx) => (
        <Grid key={idx} item sm={4} xs={12}>
          <HighlightCard summaryField={field} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Highlight;
