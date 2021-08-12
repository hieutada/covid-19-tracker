import mapData from '@highcharts/map-collection/custom/world-continents.geo.json';
import highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highchartsMap from 'highcharts/modules/map';
import { cloneDeep } from 'lodash';
import React, { useEffect, useRef, useState } from 'react';

ContinentMaps.propTypes = {};

highchartsMap(highcharts);

const generateOptions = (data) => ({
  chart: {
    height: '500px',
  },

  title: {
    text: null,
  },

  mapNavigation: {
    enabled: true,
    buttonOptions: {
      align: 'right',
    },
  },

  legend: {
    enabled: false,
  },

  series: [
    {
      data: data,
      mapData: mapData,
      joinBy: ['hc-key', 'id'],
      name: 'Số ca',
    },
  ],
});

function ContinentMaps({ data }) {
  const [options, setOptions] = useState({});
  const [mapLoaded, setMapLoaded] = useState(false);
  const chartRef = useRef(null);

  useEffect(() => {
    if (data.length > 0) {
      console.log(mapData);
      setOptions(generateOptions(data));
    }

    if (!mapLoaded) setMapLoaded(true);
  }, [data, mapLoaded]);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      chartRef.current.chart.series[0].update({
        mapData,
      });
    }
  }, [options, mapData]);

  if (!mapLoaded) return null;

  return (
    <HighchartsReact
      highcharts={highcharts}
      options={cloneDeep(options)}
      constructorType={'mapChart'}
      ref={chartRef}
    />
  );
}

export default React.memo(ContinentMaps);
