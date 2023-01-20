import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  bar_chart: {
    width: '40%',
    minWidth: '900px',
    padding: '10px',
    border: '1px solid black',
  },
  chart_container: {
    padding: '50px 0',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
}));

export const backgroundColorArr = [
  '#fc305c33',
  '#ff9f4033',
  '#ffcd5633',
  '#4bc0c033',
  '#36a2eb33',
  'rgba(153, 102, 255, 0.2)',
  '#c9cbcf33',
];

export const borderColorArr = [
  '#fe4b72',
  '#fb9126',
  '#ffcd56',
  '#4bc0c0',
  '#36a2eb',
  '#9966ff',
  '#c9cbcf',
];
