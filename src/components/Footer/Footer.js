import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';


// const appBarHeight = '100px'

const useStyles = makeStyles({
  root: {
    backgroundColor: '#0F151A',
    width: '100%',
    height: '150px',
    position: 'relative',
    bottom: '0vh',
  },
  navigation: {
      color: 'white',
      fontStyle: 'none'
  }
});

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <nav className={classes.navigation}>
        
      </nav>
    </BottomNavigation>
  );
}
