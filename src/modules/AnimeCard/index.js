import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { SearchContext } from '../../util/Search/index';
import { Typography, Link, Paper, GridListTile, Grid } from '@material-ui/core';
import './animecard.css';

const AnimeCard = (props) => {
  const history = useHistory();

  const search = useContext(SearchContext);

  const onClickHandler = (event) => {
    event.preventDefault();
    fetch(`https://api.jikan.moe/v3/anime/${props.anime.mal_id}`)
      .then((response) => response.json())
      .then((data) => {
        search.setSingle(data);
        localStorage.setItem('singleData', JSON.stringify(data));
        history.push('/single-view');
      });
  };

  const title =
    props.anime.title.length > 20
      ? `${props.anime.title.substring(0, 15)}...`
      : props.anime.title;
  const imageUrl = props.anime.image_url;
  const synopsis =
    props.anime.synopsis.length > 30
      ? `${props.anime.synopsis.substring(0, 30)}...`
      : props.anime.synopsis;

  return (
    <GridListTile className="animecard-main">
      <Grid container item xs={16}>
        <Paper className="animecard_paper">
          <img src={imageUrl} alt={title} style={{ maxHeight: 300 }} />  
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" component="h2" paragraph={true}>
            {synopsis}
          </Typography>
          <Link
            component="button"
            variant="body1"
            style={{ marginBottom: 0 }}
            onClick={onClickHandler}
            color="primary"
          >
            More Information
          </Link>
        </Paper>
      </Grid>
    </GridListTile>
  );
};

export default AnimeCard;
