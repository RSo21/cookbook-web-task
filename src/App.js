import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Recipies from './components/Recipies';
import NewRecipie from './components/NewRecipie';
import './App.css';
import "../src/scss/main.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
              <Route exact path="/" component={Recipies}/>
              <Route exact path="/new" component = {NewRecipie}/>  
          </Switch>
        </BrowserRouter> 

     
    </div>
  );
}

export default App;
