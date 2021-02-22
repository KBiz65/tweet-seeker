import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import Random from "./components/Random";
import logo from "./assets/TweetSeekerLogo.svg";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="navbar-container">
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link to="/">
                <div className="header-title">
                  <div className="header-tweet">Tweet</div>
                  <img src={logo} alt="Tweet Seeker logo"></img>
                  <div className="header-seeker">Seeker</div>
                </div>
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/searchpage">Search</Link>
            </li>
            <li className="navbar-item">
              <Link to="/randompage">Random</Link>
            </li>
          </ul>
        </div>

        <Switch>
          <Route path="/searchpage">
            <Search />
          </Route>
          <Route path="/randompage">
            <Random />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
