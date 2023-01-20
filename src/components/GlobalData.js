import React from 'react';
import { useQuery } from 'react-query';
import { Box } from '@mui/material';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import PeopleIcon from '@mui/icons-material/People';
import { fetchData } from '../helper/queryHelper';
import { GLOBAL_DATA_QUERY } from '../helper/queries';
import DataCard from './DataCard';
import CountryGrid from './CountryGrid';

function GlobalData() {
  const { data, isSuccess } = useQuery('global-data', fetchData(GLOBAL_DATA_QUERY));
  // const { data1, isSuccess1 } = useQuery('country-data', fetchAllCountry(COUNTRY_DATA_QUERY));
  if (isSuccess) {
    return (
      <Box>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
          <DataCard
            title="Active Cases"
            numericData={data?.globalTotal?.active}
            iconElement={<CoronavirusIcon />}
          />
          <DataCard
            title="Total Deaths"
            numericData={data?.globalTotal?.deaths}
            iconElement={<CoronavirusIcon sx={{ color: 'red' }} />}
            textColor="red"
          />
          <DataCard
            title="Recovered"
            numericData={data?.globalTotal?.recovered}
            iconElement={<PeopleIcon sx={{ color: 'green' }} />}
          />
        </Box>
        <Box>
          <CountryGrid />
        </Box>
      </Box>
    )
  }

  return (
    <div>Show data</div>
  )
}

export default GlobalData;
