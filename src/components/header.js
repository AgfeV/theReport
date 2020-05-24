import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 10,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color='inherit' position="static" >
        <Toolbar>
          <Grid container xs={2}>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
            </IconButton>
          </Grid>

          <Grid container xs={8}>
              <Typography variant="h4" align="center" className={classes.title}>
                The Report
              </Typography>
            
          </Grid>

          <Grid container justify="flex-end"  xs={2}>
            <Button color="inherit">Login</Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
