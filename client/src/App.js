import React  from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {RootRoutes} from '../src/config/routes'
import './App.css';


const App =()=> {
  return (
    <div className="App">
      <Router>
        <RootRoutes/>
      </Router>
    </div>
  );
}

export default App;
