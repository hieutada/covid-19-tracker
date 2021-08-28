import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getHistoryByCountry } from '../../apis';
import { DiseaseColors } from '../../constants';

CasesHistoryLineChart.propTypes = {
  slug: PropTypes.string,
};

const generateOptions = (categories, series) => ({
  chart: {
    type: 'line',
    height: 500,
  },

  title: {
    text: null,
  },

  subtitle: {
    text: 'Source: disease.sh',
    align: 'right',
  },

  colors: [DiseaseColors.CASES, DiseaseColors.RECOVERED, DiseaseColors.DEATHS],

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
});

function CasesHistoryLineChart({ slug }) {
  const { t } = useTranslation();
  const [options, setOptions] = useState({});
  const [reportType, setReportType] = useState('30');

  useEffect(() => {
    if (slug) {
      getHistoryByCountry(slug, reportType).then((res) => {
        const { cases } = res.data.timeline;

        // const title = t('title_line_chart');

        const timeLine = Object.keys(cases);

        const series = [
          {
            name: t('total cases'),
            data: Object.keys(cases).map((key) => cases[key]),
          },
        ];

        setOptions(generateOptions(timeLine, series));
      });
    }
  }, [t, slug, reportType]);

  const reportTypeChange = useCallback((event, value) => {
    setReportType(value);
  }, []);

  return (
    <>
      <ToggleButtonGroup
        value={reportType}
        exclusive
        onChange={reportTypeChange}
        size='small'
        style={{ marginTop: 10, marginLeft: 10 }}
      >
        <ToggleButton value='all' aria-label='all'>
          {t('options.all')}
        </ToggleButton>
        <ToggleButton value='30' aria-label='30d'>
          {t('options.30d')}
        </ToggleButton>
        <ToggleButton value='7' aria-label='7d'>
          {t('options.7d')}
        </ToggleButton>
      </ToggleButtonGroup>

      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
}

export default CasesHistoryLineChart;
