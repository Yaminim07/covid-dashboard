import React from 'react'
import { useQuery } from 'react-query';

import { GET_COUNTRY } from '../helper/queries';
import fetchData from '../helper/queryHelper';
import BarChart from './BarChart';
import useStyles, { backgroundColorArr, borderColorArr } from '../Ui/ChartByCountry';

function ChartByCountry() {
  const { data, isSuccess } = useQuery('country-data', fetchData(GET_COUNTRY, { code: 'india' }), { staleTime: 86400000 });

  const classes = useStyles();

  if (isSuccess) {
    const rs = data.country.result;

    const tableOne = {
      labels: ['population', 'tests', 'cases', 'recovered', 'deaths'],
      datasets: [{
        label: 'india',
        data: [rs.population, rs.tests, rs.cases, rs.recovered, rs.deaths],
        backgroundColor: backgroundColorArr,
        borderColor: borderColorArr,
        borderWidth: 1,
      }],
    }

    const tableTwo = {
      labels: ['Active', 'Critical', 'Today\'s cases'],
      datasets: [{
        label: 'india',
        data: [rs.active, rs.critical, rs.todayCases],
        backgroundColor: backgroundColorArr,
        borderColor: borderColorArr,
        borderWidth: 1,
      }],
    }

    return (
      <div className={classes.chart_container}>
        <BarChart passData={tableOne} />
        <BarChart passData={tableTwo} />
      </div>
    )
  }
  return (
    <div>Show data</div>
  )
}

export default ChartByCountry