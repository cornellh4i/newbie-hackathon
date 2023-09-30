import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import FilterMenu from "./components/FilterMenu";
import "./components/FilterMenu.css";

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Inter:400,700&display=swap"
      />
      <Navbar />
      <FilterMenu />
    </div>
  );
}

export default App;
