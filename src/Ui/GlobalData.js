import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  wrapper: {
    textAlign: 'center',
    height: '150px',
    backgroundColor: '#ff9f4033',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  title: {
    margin: 0,
    fontWeight: '400',
  },
  data_container: {
    display: 'flex',
    alignItems: 'center',
  },
  total_data_card: {
    width: '100%',
    border: '0',
    textAlign: 'center',
  },
}));
