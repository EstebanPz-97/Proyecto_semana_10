<<<<<<< HEAD
import './homepage.css'

export default function Homepage(){
    
    
    return (
    <div className="home-page">
        <h1>Homepage</h1>
     
       
    </div>
    )}
=======
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SearchContext } from '../../util/Search';
import { FormControl, Input, IconButton, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
// import Carousel_data from '../../components/Carousel_data'
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
        {/* <Carousel_data /> */}

      <Grid item> 
        <Grid item>
          <img
            alt="luffy"
            src={process.env.PUBLIC_URL}
            height={420}
            width={550}
          />
        </Grid>
        <Grid item>
          <form className="home__form">
            <FormControl type="submit" className="home__formControl">
              <Input
                placeholder="Search for you favorite anime..."
                value={input}
                onChange={(event) => setInput(event.target.value)}
                className="home__input"
              />
              <IconButton
                className="home__iconButton"
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
>>>>>>> prueba
