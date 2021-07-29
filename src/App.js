import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './views/Homepage';
import Detail from './views/Detail';
import Nosotros from './views/Nosotros';
import Contactenos from './views/Contactenos';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import Results from './views/Results/index';
import SingleView from './views/SingleView/index';
import MainNavigation from './modules/MainNavigation';
import { SearchContext } from './util/Search/index';

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

