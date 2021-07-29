import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Homepage from './views/Homepage/index';
import Results from './views/Results/index';
import SingleView from './views/SingleView/index';
import MainNavigation from './modules/MainNavigation';
import { SearchContext } from './util/Search/index';
import Contactenos from './views/Contactenos/index';

const App = () => {
  const [animeData, setAnimeData] = useState([]);
  const [singleData, setSingleData] = useState({});

  const setData = (data) => {
    setAnimeData(data);
  };

  const setSingle = (data) => {
    setSingleData(data);
  };

  const search = (searchTerm) => {
    return fetch(
      `https://api.jikan.moe/v3/search/anime?q=${searchTerm}&limit=20`
    ).then((response) => response.json());
  };

  
  return (
    <SearchContext.Provider
      value={{ search, animeData, setData, singleData, setSingle }}
    >
      <Router>
        <MainNavigation />
        <main>
          <Switch>
             <Route path="/" exact>
              <Homepage />
            </Route>
            <Route path="/results" exact>
              <Results />
            </Route>
            <Route path="/views" exact>
              <Contactenos/>
            </Route>
            <Route path="/single-view" exact>
              <SingleView />
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </SearchContext.Provider>
  );
};

export default App;

