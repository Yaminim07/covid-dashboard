import React from 'react';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& span': {
      fontSize: '20px',
    },
  },
}
));

function ErrorPage({ err }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <WarningAmberIcon sx={{ fontSize: '150px', color: 'orange' }} />
      <span>
        Oops, Faced an Issue
        <br />
        error message:
        {' '}
        {err}
        <br />
        Page Not Found!!!
      </span>
    </div>
  )
}

ErrorPage.propTypes = {
  err: PropTypes.string,
}

export default ErrorPage;
