import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import NavBar from "./components/nav-bar/NavBar";
import "./style.css";

function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <Content />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
