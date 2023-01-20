import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  wrapper: {
    width: '100vw',
    textAlign: 'center',
    height: '150px',
    backgroundColor: '#ff9f4033',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    padding: '12px 0 0 0',
    margin: 0,
    fontWeight: '400',
  },
  data_container: {
    display: 'flex',
    alignItems: 'center',
    width: '90vw',
    margin: 'auto',
  },
  total_data_card: {
    border: '0',
    textAlign: 'center',
  },
  numeric_data_count: {
    fontSize: '25px !important',
  },
}));
