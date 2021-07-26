import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './views/Homepage';
import Detail from './views/Detail';
import Nosotros from './views/Nosotros';
import Carousel_data from './components/Carousel_data';
import Contactenos from './views/Contactenos';


function App() {
  return (
    <div className="App">
       <Router>
        <Header contactenos="contactenos" about="about" />
        <Carousel_data />
        <Switch>
          <Route path="/detail">
            <Detail />
          </Route>
          <Route path="/about">
            <Nosotros />
          </Route>
          <Route path="/contactenos">
            <Contactenos />
          </Route>
          
           <Route path="/">
            <Homepage />
          </Route> 
        </Switch>
        <Footer />
      </Router> 
    </div>
  );
}

export default App;
