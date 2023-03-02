import React from "react";
import "../styles/App.css";
// import React from "react";
// import "./App.css"
import { BrowserRouter as Router,Link, Route, Switch, useLocation } from "react-router-dom";
import Home from "./Home";
import Shapes from "./Shapes";
import Image from "./Image";




export default function App() {
  return (
    <Router>
    <div id="home">
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Shapes" >Shapes</Link>
          </li>
          <li>
            <Link to="/Image">Image</Link>
          </li>
        </ul>
      </nav>
      {/* Route components are rendered if the path prop matches the current URL */}
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route  path="/Shapes">
          
            
              <Shapes />
            
         
        </Route>
        
      
        <Route path="/Image">
          <Image />
        </Route>
      </Switch>
    </div>
      </Router>
  );
}
// export default App;
