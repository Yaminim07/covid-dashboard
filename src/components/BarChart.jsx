import React from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJs } from 'chart.js/auto';

import useStyles from '../Ui/ChartByCountry';

function BarChart({ passData }) {
  const classes = useStyles();

  const options = {
    plugins: {
      legend: {
        labels: {
          font: {
            size: 17,
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        font: {
          size: 10,
        },
      },
    },
  };

  return (
    <div className={classes.bar_chart}>
      <Bar data={passData} options={options} />
    </div>
  )
}

BarChart.propTypes = {
  passData: PropTypes.instanceOf(Object),
}

export default BarChart;
