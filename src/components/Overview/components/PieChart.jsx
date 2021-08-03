import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import HighchartsReact from 'highcharts-react-official';

PieChart.propTypes = {
  dataChart: PropTypes.array,
};

const generateOptions = (data) => {

  return {
    chart: {
      type: 'pie',
    },
    title: {
      text: null,
    },
    subtitle: {
      text: 'Số liệu cập nhật từ WHO',
    },

    accessibility: {
      announceNewData: {
        enabled: true,
      },
      point: {
        valueSuffix: '%',
      },
    },

    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          format: '{point.name}: {point.y:.1f}%',
        },
      },
    },

    tooltip: {
      headerFormat: '<span style="font-size:13px">{series.name}</span><br>',
      pointFormat:
        '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b>%<br/>',
    },

    colors: ['#77a1e5', '#28a745', 'gray'],

    series: [
      {
        name: 'Tỉ lệ',
        colorByPoint: true,
        innerSize: '60%',
        data: data,
      },
    ],
  };
};

function PieChart({ dataChart }) {
  const [options, setOptions] = useState({});

  useEffect(() => {
    if (dataChart.length > 0) {
      setOptions(generateOptions(dataChart));
    }
  }, [dataChart]);

  return <HighchartsReact options={options} />;
}

export default PieChart;
