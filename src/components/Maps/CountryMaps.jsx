import { Box } from '@material-ui/core';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highchartsMap from 'highcharts/modules/map';
import { cloneDeep } from 'lodash';
import React, { useEffect, useRef, useState } from 'react';
import { getDetailVn } from '../../apis';

// Load Highcharts modules
highchartsMap(Highcharts);

const generateOptions = (mapData, data) => ({
  chart: {
    height: '500px',
  },

  title: {
    text: mapData.title,
  },

  mapNavigation: {
    enabled: true,
    buttonOptions: {
      align: 'right',
    },
  },

  colorAxis: {
    dataClasses: [
      {
        to: 100,
        color: '#FFC4AA',
      },
      {
        from: 101,
        to: 500,
        color: '#FF8A66',
      },
      {
        from: 501,
        to: 1000,
        color: '#FF392B',
      },
      {
        from: 1001,
        to: 10000,
        color: '#B71525',
      },
      {
        from: 10001,
        name: '> 10 000',
        color: '#7A0826',
      },
    ],
  },

  legend: {
    layout: 'horizontal',
    align: 'center',
    verticalAlign: 'bottom',
    valueDecimals: 0,
  },

  tooltip: {
    useHTML: true,
    backgroundColor: '#9c9c9c',
    borderColor: '#aaa',
    headerFormat: '',
    pointFormat:
      '<div style="text-align: center; text-transform: uppercase; color:white">' +
      '<span style="text-align: center;"><b>{point.name}</b></span></div>' +
      '<div style="color:white"> <b>Nhiễm bệnh: {point.value}</span></b> <br/>',
  },

  series: [
    {
      data: data,
      mapData: mapData,
      joinBy: 'name',
      name: 'Số ca',
    },
  ],
});

const CountryMaps = ({ mapData }) => {
  const [options, setOptions] = useState({});
  const [mapLoaded, setMapLoaded] = useState(false);
  const chartRef = useRef(null);

  useEffect(() => {
    if (mapData && Object.keys(mapData).length) {
      if (mapData.title === 'Vietnam') {
        getDetailVn().then((res) => {
          const provinces = res.data.detail;

          const data = Object.values(provinces).map((obj) => ({
            name: obj.name,
            value: obj.cases,
          }));

          setOptions(generateOptions(mapData, data));
        });
      } else {
        const fakeData = mapData.features.map((feature, index) => ({
          name: feature.properties['name'],
          value: Math.floor(Math.random() * 501) * (index + 1),
        }));

        setOptions(generateOptions(mapData, fakeData, fakeData.length));
      }

      if (!mapLoaded) setMapLoaded(true);
    }
  }, [mapData, mapLoaded]);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      chartRef.current.chart.series[0].update({
        mapData,
      });
    }
  }, [options, mapData]);

  if (!mapLoaded) return null;

  return (
    <Box paddingTop={'8px'}>
      <HighchartsReact
        highcharts={Highcharts}
        options={cloneDeep(options)}
        constructorType={'mapChart'}
        ref={chartRef}
      />
    </Box>
  );
};

CountryMaps.defaultProps = {
  mapData: {},
};

export default React.memo(CountryMaps);
