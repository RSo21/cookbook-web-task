import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Recipies from './components/Recipies';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
              <Route exact path="/" component={Recipies}/>
          </Switch>
        </BrowserRouter> 

     
    </div>
  );
}

export default App;
