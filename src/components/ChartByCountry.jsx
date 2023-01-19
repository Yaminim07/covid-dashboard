import React from 'react'
import { useQuery } from 'react-query';

import { COUNTRY_DATA_QUERY } from '../helper/queries';
import { fetchAllCountry } from '../helper/queryHelper';
import DataCard from './DataCard';
import useStyles from '../Ui/ChartByCountry';

function ChartByCountry() {
  const { data, isSuccess } = useQuery('country-data', fetchAllCountry(COUNTRY_DATA_QUERY), { staleTime: 86400000 });
  console.log(data?.countries);

  const classes = useStyles();

  if (isSuccess) {
    return (
      <div>
        <DataCard
          className={classes.total_data_card}
          title="Total Deaths"
          numericData={data?.globalTotal?.deaths}
          textColor="red"
        />
      </div>
    )
  }
  return (
    <div>Show data</div>
  )
}

export default ChartByCountry
