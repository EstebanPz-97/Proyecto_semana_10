import React from 'react';
import { Grid, Paper, Typography} from '@material-ui/core';
import './singleanime.css'

const SingleAnime = (props) => {
  console.log(props.info);
  const title = props.info.title;
  const imageUrl = props.info.image_url;
  const episodes = props.info.episodes;
  const rating = props.info.rating;
  const airing = String(props.info.airing);
  const broadcast = props.info.broadcast;
  const synopsis = props.info.synopsis;
  const score = props.info.score;
  const url = props.info.url;
  return (
    <Grid
      container
      spacing={12}
      direction="row"
      justify="center"
      alignContent="center"
      alignItems="center"
      className="singleanime-main"
    >
      <Grid item>
        <img src={imageUrl} alt={title} className="singleanime-image" />
      </Grid>
      <Grid item>
        <Paper elevation={3} className="singleanime-info">
          <Typography variant="h4" component="h2">
            {title}
          </Typography>
          <Typography variant="h5" component="h2">
            Airing: {airing}
          </Typography>
          <Typography variant="h5" component="h2">
            Score: {score}
          </Typography>
          <Typography variant="h5" component="h2">
            Broadcast: {broadcast}
          </Typography>
          <Typography variant="h5" component="h2">
            Rating: {rating}
          </Typography>
          <Typography variant="h5" component="h2">
            Episodes: {episodes}
          </Typography>
          <Typography variant="h5" component="h2">
            Synopsis: {synopsis}
          </Typography>
          <Typography variant="h5" component="h2">
          <a href={url}>  </a> 
          </Typography>          
          
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SingleAnime;