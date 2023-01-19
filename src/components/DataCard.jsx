import React from 'react';
import { Typography, Grid } from '@mui/material';
import PropTypes from 'prop-types';

function DataCard(props) {
  const {
    title, numericData, iconElement, className,
  } = props;

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
          <Typography color="text.secondary" gutterBottom>
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
  iconElement: PropTypes.string,
  className: PropTypes.string,
}

export default DataCard;
