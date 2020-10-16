import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Routes from "./Components/Routes";

import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes />

        <Footer />
      </Router>
    </div>
  );
};

export default App;
