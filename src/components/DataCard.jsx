import React from 'react';
import { Typography, Grid } from '@mui/material';
import PropTypes from 'prop-types';

import useStyles from '../Ui/GlobalData';

function DataCard({
  title, numericData, iconElement, className, styleType,
}) {
  const classes = useStyles();
  return (
    <Grid
      container
      className={className}
    >
      <Grid
        container
        flexDirection="column"
        xs={10}
        justifySelf="center"
      >
        <Grid>
          <Typography color="text.secondary" gutterBottom>
            {title}
          </Typography>
        </Grid>
        <Grid>
          <Typography color="text.secondary" gutterBottom className={`${classes.numeric_data_count} ${styleType}`}>
            {numericData}
          </Typography>
        </Grid>
      </Grid>
      <Grid xs={2}>
        {iconElement}
      </Grid>
    </Grid>
  )
}

DataCard.propTypes = {
  title: PropTypes.string,
  numericData: PropTypes.number,
  iconElement: PropTypes.instanceOf(Object),
  className: PropTypes.string,
  styleType: PropTypes.string,
}

export default DataCard;
