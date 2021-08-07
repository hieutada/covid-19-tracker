import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getHistoryByCountry } from '../../../apis';
import { DiseaseColors } from '../../../constants';

LineChart.propTypes = {
  slug: PropTypes.string,
};

const generateOptions = (title, categories, series) => {
  return {
    chart: {
      height: 500,
    },

    title: {
      text: title,
    },

    subtitle: {
      text: 'Source: disease.sh',
    },

    colors: [
      DiseaseColors.CASES,
      DiseaseColors.RECOVERED,
      DiseaseColors.DEATHS,
    ],

    xAxis: {
      categories: categories,
      crosshair: true,
    },

    yAxis: {
      title: {
        text: null,
      },
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
      },
    },

    series: series,
  };
};

function LineChart({ slug }) {
  const { t } = useTranslation();
  const [options, setOptions] = useState({});
  const [reportType, setReportType] = useState('30');

  useEffect(() => {
    if (slug) {
      getHistoryByCountry(slug, reportType).then((res) => {
        const { cases, recovered, deaths } = res.data.timeline;

        const title = t('title_line_chart');

        const timeLine = Object.keys(cases);

        const series = [
          {
            name: t('total cases'),
            data: Object.keys(cases).map((key) => cases[key]),
          },
          {
            name: t('recovered'),
            data: Object.keys(recovered).map((key) => recovered[key]),
          },
          {
            name: t('deaths'),
            data: Object.keys(deaths).map((key) => deaths[key]),
          },
        ];

        setOptions(generateOptions(title, timeLine, series));
      });
    }
  }, [t, slug, reportType]);

  const reportTypeChange = (event, value) => {
    setReportType(value);
  };

  return (
    <>
      <ToggleButtonGroup
        value={reportType}
        exclusive
        onChange={reportTypeChange}
        size='small'
        style={{marginTop: 10, marginLeft: 10}}
      >
        <ToggleButton value='all' aria-label='all'>
          {t('all')}
        </ToggleButton>
        <ToggleButton value='30' aria-label='30d'>
          {t('30 days')}
        </ToggleButton>
        <ToggleButton value='7' aria-label='7d'>
          {t('7 days')}
        </ToggleButton>
      </ToggleButtonGroup>

      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
}

export default LineChart;
