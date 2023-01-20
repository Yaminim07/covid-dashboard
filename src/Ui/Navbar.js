import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  app_bar: {
    display: 'flex !important',
    flexDirection: 'row !important',
    alignItems: 'center !important',
    padding: '5px 0px !important',
    justifyContent: 'space-around !important',
    height: '90px',
    backgroundColor: '#1976d2 !important',
  },
  logo: {
    display: 'flex ',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '5px',
  },
  search_container: {
    display: 'flex ',
    alignItems: 'center',
    backgroundColor: '#1976d2',
    height: '90%',
    width: '40%',
    border: '1.5px solid #05417e',
    zIndex: 100,
    borderRadius: '5px',
    '& input': {
      color: 'white',
      padding: '0 10px',
      background: 'none',
      border: 0,
      height: '100%',
      width: '100%',
      fontSize: '17px',
      '&::placeholder': {
        color: 'white',
      },
      '&:focus': {
        border: 0,
      },
    },
    '& button': {
      borderLeft: '1.5px solid #05417e',
      border: 0,
      height: '100%',
      width: '70px',
      backgroundColor: '#1976d2',
      cursor: 'pointer',
    },
  },
}));
