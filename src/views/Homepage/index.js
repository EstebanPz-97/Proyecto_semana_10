import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SearchContext } from '../../util/Search';
import { FormControl, Input, IconButton, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import './homepage.css';

const Homepage = () => {
  const history = useHistory();
  const search = useContext(SearchContext);
  const [input, setInput] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    search.search(input).then((data) => {
      search.setData(data.results);
      localStorage.setItem('myData', JSON.stringify(data.results));
      history.push('/results');
    });
  };

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      alignContent="center"

    >
      <Grid item> 
        <Grid item>
          
        </Grid>
        <Grid item>
          <form className="form">
            <FormControl type="submit" className="formControl">
              <Input
                placeholder="Search for you favorite anime..."
                value={input}
                onChange={(event) => setInput(event.target.value)}
                className="search"
              />
              <IconButton
                className="search-icon"
                variant="contained"
                color="primary"
                type="submit"
                disabled={!input}
                onClick={handleSearch}
              >
                <SearchIcon />
              </IconButton>
            </FormControl>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Homepage;
