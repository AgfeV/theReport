import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Paper, Grid } from '@material-ui/core';
import headlinePhoto from './images/s2kfje4uqfz41.jpg'

const useStyles = makeStyles({
  root: {
    maxWidth: 325,
  },
  media: {
    height: 200,
  },
  media2: {
    height: 50,
  }
});

export default function MediaCard({ countryName, flag, newsData }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} raised={true} elevation={20}>
    
        <CardMedia
          className={classes.media}
          image={flag}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="h5" component="h2" align="center">
            {countryName}
          </Typography>
        </CardContent>
        
        {/* Break out into components for reach news article and link that will go into a story */}
        {
          newsData.map( news => (
            <CardContent>
              <Paper elevation={4}>
                <CardMedia  className={classes.media2} image={headlinePhoto}/>
                <CardActionArea>
                  <Typography variant="body2" color="textSecondary" component="p">
                  {news.title}
                  </Typography>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="secondary" variant="outlined">
                    Share
                  </Button>
                  <Button size="small" color="primary" variant="outlined">
                      Learn More
                  </Button>
                </CardActions>
              </Paper>
          </CardContent>   
          ))
        }
    </Card>
  );
}
