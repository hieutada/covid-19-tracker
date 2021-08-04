import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { DiseaseColors } from '../../../constants';

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
          format: '{point.name}<br/><span style="font-size:18px">{point.y:.1f}%</span>',
        },
      },
    },

    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat:
        '(<span style="color:{point.color}">{point.name}</span>: <b>{point.y}%</b><br/>)',
    },

    colors: [
      DiseaseColors.ACTIVE,
      DiseaseColors.RECOVERED,
      DiseaseColors.DEATHS,
    ],

    series: [
      {
        name: 'Tỉ lệ',
        colorByPoint: true,
        innerSize: '60%',
        data: [...data],
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

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

export default PieChart;
