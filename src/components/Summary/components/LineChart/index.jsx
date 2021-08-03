import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

LineChart.propTypes = {
  data: PropTypes.array,
};

const generateOptions = (data) => {
  const categories = data.map((item) => moment(item.Date).format('DD/MM/YYYY'));

  return {
    chart: {
      height: 500,
    },
    title: {
      text: 'Biểu đồ lịch sử ghi nhận số ca mắc Covid-19',
    },
    xAxis: {
      categories: categories,
      crosshair: true,
    },
    colors: ['#F3585B'],
    yAxis: {
      min: 0,
      title: {
        text: null,
      },
      labels: {
        align: 'right',
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y} ca</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: 'Tổng Ca nhiễm',
        data: data.map((item) => item.Confirmed),
      },
    ],
  };
};

function LineChart({ data }) {
  const [options, setOptions] = useState({});
  const [reportType, setReportType] = useState(0);

  useEffect(() => {
    const customData =
      reportType === 0 ? data.slice(0) : data.slice(data.length - reportType);

    setOptions(generateOptions(customData));
  }, [data, reportType]);

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
        <ToggleButton value={0} aria-label='all'>
          Tất cả
        </ToggleButton>
        <ToggleButton value={30} aria-label='30d'>
          30 ngày
        </ToggleButton>
        <ToggleButton value={7} aria-label='7d'>
          7 ngày
        </ToggleButton>
      </ToggleButtonGroup>

      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
}

export default LineChart;
