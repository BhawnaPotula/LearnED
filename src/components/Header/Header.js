import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MailIcon from '@material-ui/icons/Mail';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import Fab from '@material-ui/core/Fab';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor : 'black',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    display: 'grid',
    gridTemplateRows: '1fr 3fr',
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  header1: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
  },
  companyInfo: {
   justifySelf: 'flex-start'
  },
  bookDemo: {
    justifySelf: 'flex-end'
  },
   header2: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
  },
  navigation: {
    display: 'grid',
    alignSelf: 'flex-end',
    gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
  },
  title: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    marginTop: '8px',
    left: '13px'
  },
  titleLearn: {
    color: 'black',
    alignSelf: 'flex-start',
  },
  titleED: {
    color: 'red',
    flexGrow: 1,
    alignSelf: 'flex-start',
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: 'white', height: '110px'}}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.header1}>
            <div className={classes.companyInfo}>
                <span>
                    <IconButton aria-label="search">
                        <MailIcon />
                    </IconButton>
                </span>
                <span style={{color: 'black'}}>
                    info@learned.com
                </span>
                <span>
                    <IconButton aria-label="search">
                        <ContactPhoneIcon />
                    </IconButton>
                </span>
                <span style={{color: 'black'}}>
                    8421652265
                </span>
            </div>
            <div className={classes.bookDemo}>
                <Fab variant="extended">
                    Book a Demo
                </Fab>
            </div>
          </div>
          <div className={classes.header2}>
            <div className={classes.title}>
                <Typography className={classes.titleLearn} variant="h5" noWrap>
                Learn
                </Typography>
                <Typography className={classes.titleED} variant="h5" noWrap>
                ED
                </Typography>
            </div>
            <div className={classes.navigation}>
                <Button style={{color: 'red'}}>Who we are?</Button>
                <Button style={{color: 'red'}}>Courses</Button>
                <Button style={{color: 'red'}}>Enquiry</Button>
                <Button style={{color: 'red'}}>Careers</Button>
            </div>
          </div>
                  
        </Toolbar>
      </AppBar>
    </div>
  );
}
