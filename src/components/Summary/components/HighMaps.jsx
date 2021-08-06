import { Box } from '@material-ui/core';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highchartsMap from 'highcharts/modules/map';
import { cloneDeep } from 'lodash';
import React, { useEffect, useRef, useState } from 'react';
import { getDetailVn } from '../../../apis';

// Load Highcharts modules
highchartsMap(Highcharts);

const generateOptions = (mapData, data, maxLinearColor) => ({
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
    min: 0,
    max: maxLinearColor,
    stops: [
      [0.2, '#FFC4AA'],
      [0.4, '#FF8A66'],
      [0.6, '#FF392B'],
      [0.8, '#B71525'],
      [1, '	#7A0826'],
    ],
  },

  legend: {
    layout: 'horizontal',
    align: 'center',
    verticalAlign: 'bottom',
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

const HighMaps = ({ mapData }) => {
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

          const maxLinearColor =
            data.reduce((a, b) => a + parseInt(b.value), 0) / data.length;

          setOptions(generateOptions(mapData, data, maxLinearColor));
        });

      } else {
        const fakeData = mapData.features.map((feature, index) => ({
          name: feature.properties['name'],
          value: index,
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

HighMaps.defaultProps = {
  mapData: {},
};

export default React.memo(HighMaps);
