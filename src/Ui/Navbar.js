import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  app_bar: {
    display: 'flex !important',
    flexDirection: 'row !important',
    alignItems: 'center !important',
    padding: '5px 0px !important',
    justifyContent: 'space-around !important',
    height: '60px',
  },
  logo: {
    display: 'flex ',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '5px',
  },
  search_container: {
    display: 'flex ',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0 0 0 1em',
    backgroundColor: '#1976d2',
    height: '90%',
    width: '40%',
    border: '1.5px solid #05417e',
    borderRadius: '5px',
    '& input': {
      color: 'white',
      padding: '5px',
      background: 'none',
      border: 0,
      height: '90%',
      width: '100%',
      '&::placeholder': {
        color: 'white',
      },
      '&:focus': {
        border: '0 !important',
      },
      '&:active': {
        border: '0 !important',
      },
    },
  },
}));
