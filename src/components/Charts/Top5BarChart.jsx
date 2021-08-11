import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DiseaseColors } from '../../constants';
import timeSince from '../../utils/timeSince';

Top5BarChart.propTypes = {};

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

function Top5BarChart({ data }) {
  const { t } = useTranslation();

  const [options, setOptions] = useState({});

  useEffect(() => {
    if (data.length > 0) {
      const lastUpdate = data[0].last_update;
      const categories = data.map((country) => country.province_name);
      const series = [
        {
          name: t('total cases'),
          data: data.map((country) => country.confirmed),
        },
        {
          name: t('recovered'),
          data: data.map((country) => country.recovered),
        },
        { name: t('deaths'), data: data.map((country) => country.deaths) },
      ];

      setOptions(generateOptions(lastUpdate, categories, series));
    }
  }, [data]);

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

export default Top5BarChart;
