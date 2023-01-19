import React from 'react';
import { useQuery } from 'react-query';
import { Box } from '@mui/material';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import PeopleIcon from '@mui/icons-material/People';
import fetchData from '../helper/queryHelper';
import { GLOBAL_DATA_QUERY } from '../helper/queries';

import DataCard from './DataCard';
import useStyles from '../Ui/GlobalData';

function GlobalData() {
  const { data, isSuccess } = useQuery('global-data', fetchData(GLOBAL_DATA_QUERY), { staleTime: 200000 });

  const classes = useStyles();

  if (isSuccess) {
    return (
      <Box className={classes.data_container}>
        <DataCard
          title="Active Cases"
          numericData={data?.globalTotal?.active}
          iconElement={<CoronavirusIcon />}
          className={classes.total_data_card}
        />
        <DataCard
          className={classes.total_data_card}
          title="Total Deaths"
          numericData={data?.globalTotal?.deaths}
          iconElement={<CoronavirusIcon sx={{ color: 'red' }} />}
          textColor="red"
        />
        <DataCard
          className={classes.total_data_card}
          title="Recovered"
          numericData={data?.globalTotal?.recovered}
          iconElement={<PeopleIcon sx={{ color: 'green' }} />}
        />
      </Box>
    )
  }

  return (
    <div>Show data</div>
  )
}

export default GlobalData;
