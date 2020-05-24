import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 325,
  },
  media: {
    height: 200,
  },
});

export default function MediaCard({ countryName, flag, newsData }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
    
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
              <Typography variant="body2" color="textSecondary" component="p">
                {news.title}
                <CardActions>
                  <Button size="small" color="default" variant="outlined">
                    Share
                  </Button>
                  <Button size="small" color="default" variant="outlined">
                      Learn More
                  </Button>
                </CardActions>
              </Typography>
          </CardContent>   
          ))
        }
    </Card>
  );
}
