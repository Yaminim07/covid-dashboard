import React from 'react'
import { useQuery } from 'react-query';

import { GET_COUNTRY } from '../helper/queries';
import fetchData from '../helper/queryHelper';
import BarChart from './BarChart';
import useStyles, {
  backgroundColorArr, backgroundColorArr2, borderColorArr, borderColorArr2,
} from '../Ui/ChartByCountry';
import { CountryState } from '../Context/CountryContext';

function ChartByCountry() {
  const [countryState] = CountryState();

  const { data, isSuccess } = useQuery(['country-data', countryState], fetchData(GET_COUNTRY, { code: countryState }), { staleTime: 86400000 });

  const classes = useStyles();

  if (isSuccess) {
    const rs = data?.country?.result;

    const tableOne = {
      labels: ['population', 'tests', 'cases', 'recovered', 'deaths'],
      datasets: [{
        label: 'Population Based',
        data: [rs.population, rs.tests, rs.cases, rs.recovered, rs.deaths],
        backgroundColor: backgroundColorArr,
        borderColor: borderColorArr,
        borderWidth: 1,
      }],
    }

    const tableTwo = {
      labels: ['Active', 'Critical', 'Today\'s cases'],
      datasets: [{
        label: 'Active Cases Based',
        data: [rs.active, rs.critical, rs.todayCases],
        backgroundColor: backgroundColorArr2,
        borderColor: borderColorArr2,
        borderWidth: 1,
      }],
    }

    return (
      <div className="wrapper">
        <h2 className={classes.title}>
          Country:
          {countryState.toUpperCase()}
        </h2>
        <div className={classes.chart_container}>
          <BarChart passData={tableOne} />
          <BarChart passData={tableTwo} />
        </div>
      </div>
    )
  }
  return (
    <div className={classes.chart_container}>Loading...</div>
  )
}

export default ChartByCountry
