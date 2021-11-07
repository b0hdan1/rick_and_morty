import React from 'react';
import './App.scss';
import { Characters } from './pages/Characters/Characters';
import { Episodes } from './pages/Episodes/Episodes';
import { Locations } from './pages/Locations/Locations';
import { MyWatchList } from './pages/MyWatchList/MyWatchList';
import { Header } from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


export const App = () => {
  return (
    <>
      <Router>
        <Header />
        <div className="App">
          <Switch>
            <Route path="/characters" component={Characters}/>
            <Route path="/episodes" component={Episodes}/>
            <Route path="/locations" component={Locations}/>
            <Route path="/my-watch-list" component={MyWatchList}/>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
