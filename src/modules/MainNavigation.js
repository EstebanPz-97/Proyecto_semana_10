import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    
  },  
}));

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
          
         <Toolbar>
          <Link to="/" className={classes.title}>
            <Typography variant="h6" noWrap>
              Anime Viewer
            </Typography>
          </Link>          
        </Toolbar>
    </div>
  );
}
