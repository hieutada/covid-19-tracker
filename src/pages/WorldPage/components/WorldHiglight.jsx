import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import VerticalCard from '../../../components/HighlightCards/VerticalCard';
import { DiseaseColors } from '../../../constants';
import { useState } from 'react';

WorldHiglight.propTypes = {};

function WorldHiglight({ data }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    const formatList = [
      {
        title: 'total cases',
        number: data.cases,
        sub: data.todayCases,
        color: DiseaseColors.CASES,
      },
      {
        title: 'active',
        number: data.active,
        sub: '',
        color: DiseaseColors.ACTIVE,
      },
      {
        title: 'recovered',
        number: data.recovered,
        sub: data.todayRecovered,
        color: DiseaseColors.RECOVERED,
      },
      {
        title: 'deaths',
        number: data.deaths,
        sub: data.todayDeaths,
        color: DiseaseColors.DEATHS,
      },
    ];

    setList(formatList);
  }, [data]);

  return (
    <Grid container spacing={2}>
      {list.map((item) => (
        <Grid item xs={12} sm={6}>
          <VerticalCard
            title={item.title}
            number={item.number}
            sub={item.sub}
            color={item.color}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default WorldHiglight;
