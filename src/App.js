import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';

import { Grid } from '@material-ui/core';
import Header from './components/header'
import NewsGrid from './components/newsGrid'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  return (
    <React.Fragment>
      <Header/>
      <Grid container >
            {/*Gutters with content in the center*/}
            <Grid item container xs={false} sm={false} md={1} />
            
            <Grid item container xs={12} sm={12} md={10} justify='center' spacing={2}>
                {/* Currently going with the intellegence aggergating idea, will be a data engineering project at its core.*/}
                <NewsGrid/> 
            </Grid>
            
            <Grid item container xs={false} sm={false} md={1}/>
        </Grid>
  </React.Fragment>
  );
}
