/* eslint-disable  */
import React from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJs } from 'chart.js/auto'; 

import useStyles from '../Ui/ChartByCountry';

function BarChart({ passData }) {
  const classes = useStyles();

  const options = {
    plugins: {
      legend: {
          labels: {
              // This more specific font property overrides the global property
              font: {
                  size: 20
              }
          }
      }
  },
    scales: {
      y: {
        beginAtZero: true,
      }
    }
  };
  return (
    <div className={classes.bar_chart}>
      <Bar data= {passData} options={options}/>
    </div>
  )
}

BarChart.propTypes = {
  yAxis: PropTypes.instanceOf(Array),
}

export default BarChart;