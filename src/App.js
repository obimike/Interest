import React from "react";
import "./App.css";
import Home from "./views/Home";
import Bitcoin from "./views/BitCoin";
import Technology from "./views/Technology";
import Forex from "./views/Forex";
import Search from "./views/Look-up";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/bitcoin" exact component={Bitcoin} />
          <Route path="/technology" exact component={Technology} />
          <Route path="/forex" exact component={Forex} />
          <Route path="/look-up" exact component={Search} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
