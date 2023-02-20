import React from "react";

import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Dropdown from "./Components/Dropdown";
import Navbar from "./Components/Navbar";
import ScrollToTop from "./Components/ScrollToTop";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import Footer from "./Pages/Footer";
import Home from "./Pages/Home";
import Properties from "./Pages/Properties";
import SingleHouse from "./Pages/SingleHouse";
import GlobalStyle from "./Styles/GlobalStyle";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Dropdown />
      <ScrollToTop>
        <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/properties">
          <Properties />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/properties/:id" children={<SingleHouse />} />
        <Route path="*">
          <Error />
        </Route>

        </Switch>
      </ScrollToTop>
      <Footer />
    </Router>
  );
};

export default App;
