import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import { Box } from '@material-ui/core';
import { useEffect } from 'react';
import { getNcovReport } from '../../apis';
import { DiseaseColors } from '../../constants';
import timeSince from '../../utils/timeSince';
import { useHistory } from 'react-router-dom';

BarChart.propTypes = {};

const generateOptions = (lastUpdate, categories, series) => ({
  chart: {
    type: 'bar',
    height: '400px',
  },
  title: {
    text: null,
  },
  subtitle: {
    text: `Update: ${timeSince(lastUpdate, 'en')} ago`,
  },

  colors: [DiseaseColors.CASES, DiseaseColors.RECOVERED, DiseaseColors.DEATHS],

  xAxis: {
    categories: categories,
    title: {
      text: null,
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: null,
      align: 'high',
    },
    labels: {
      overflow: 'justify',
    },
  },
  tooltip: {
    valueSuffix: ' millions',
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true,
      },
    },
  },

  credits: {
    enabled: false,
  },
  series: series,
});

function BarChart(props) {
  const { t } = useTranslation();

  const history = useHistory();
  const [options, setOptions] = useState({});

  useEffect(() => {
    try {
      getNcovReport().then(async (res) => {
        const world = await res.data.data['TG'];
        const top5 = world.slice(0, 5);

        const lastUpdate = top5[0].last_update;
        const categories = top5.map((country) => country.province_name);
        const series = [
          {
            name: t('total cases'),
            data: top5.map((country) => country.confirmed),
          },
          {
            name: t('recovered'),
            data: top5.map((country) => country.recovered),
          },
          { name: t('deaths'), data: top5.map((country) => country.deaths) },
        ];

        setOptions(generateOptions(lastUpdate, categories, series));
      });
    } catch (error) {
      return history.push('/');
    }
  }, []);

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

export default BarChart;
