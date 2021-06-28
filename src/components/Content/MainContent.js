import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '500px'
  },
}));

function MainContent() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            
        </div>
    )
}

export default MainContent
