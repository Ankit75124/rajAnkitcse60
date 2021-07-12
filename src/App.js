import React from "react";
import NavBar from "./components/NavBar";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { Home } from "./components/pages/Home.js";
import { About } from "./components/pages/About";
import { Contact } from "./components/pages/Contact";

function App() {
  return (
    <>
    <Router>
        <NavBar/>
      <div classNmae="pages">
      <Switch>
      <Route exact path="/" component={Home}/> 
      <Route exact path="/About" component={About}/> 
      <Route exact path="/contact" component={Contact}/>    
      </Switch>
      </div>
   </Router>
    </>
  );   
}

export default App;
