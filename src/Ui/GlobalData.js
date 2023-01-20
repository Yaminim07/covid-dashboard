import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  wrapper: {
    width: '100vw',
    textAlign: 'center',
    minHeight: '150px',
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
    display: 'flex !important',
    flexWrap: 'wrap !important',
    alignItems: 'center',
    width: '90vw',
    margin: 'auto',
  },
  total_data_card: {
    // width: '30%',
    flex: 1,
    border: '0',
    textAlign: 'center',
  },
  numeric_data_count: {
    fontSize: '25px !important',
  },
}));
