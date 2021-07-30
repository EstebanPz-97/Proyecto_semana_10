import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './views/Homepage';
import Nosotros from './views/Nosotros';
import Contactenos from './views/Contactenos';
import Results from './views/Results/index';
import SingleView from "./views/SingleView/index"
import { SearchContext } from './util/Search/index';

function App() {

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
    <div className="App">
          <SearchContext.Provider
      value={{ search, animeData, setData, singleData, setSingle }}
    >
       <Router>
        <Header contactenos="contactenos" about="about" />
        <Switch>
          <Route path="/about">
            <Nosotros />
          </Route>
          <Route path="/contactenos">
            <Contactenos />
          </Route>
            <Route path="/results" exact>
              <Results />
            </Route>
            <Route path="/single-view" exact>
              <SingleView />
            </Route>
           <Route path="/">
            <Homepage />
          </Route> 
        </Switch>
        <Footer />
      </Router> 
      </SearchContext.Provider>
    </div>
  );
}

export default App;
