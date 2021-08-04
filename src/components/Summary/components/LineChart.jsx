import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { getHistoryByCountry } from '../../../apis';
import { DiseaseColors } from '../../../constants';

LineChart.propTypes = {
  slug: PropTypes.string,
};

const generateOptions = (categories, series) => {
  return {
    chart: {
      height: 500,
    },

    title: {
      text: 'Lịch sử ghi nhận Covid-19',
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
  const [options, setOptions] = useState({});
  const [reportType, setReportType] = useState('30');

  useEffect(() => {
    if (slug) {
      getHistoryByCountry(slug, reportType).then((res) => {
        const { cases, recovered, deaths } = res.data.timeline;

        const timeLine = Object.keys(cases);

        const series = [
          {
            name: 'Số ca mắc',
            data: Object.keys(cases).map((key) => cases[key]),
          },
          {
            name: 'Số ca hồi phục',
            data: Object.keys(recovered).map((key) => recovered[key]),
          },
          {
            name: 'Số ca tử vong',
            data: Object.keys(deaths).map((key) => deaths[key]),
          },
        ];

        setOptions(generateOptions(timeLine, series));
      });
    }
  }, [slug, reportType]);

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
      >
        <ToggleButton value='all' aria-label='all'>
          Tất cả
        </ToggleButton>
        <ToggleButton value='30' aria-label='30d'>
          30 ngày
        </ToggleButton>
        <ToggleButton value='7' aria-label='7d'>
          7 ngày
        </ToggleButton>
      </ToggleButtonGroup>

      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
}

export default LineChart;
