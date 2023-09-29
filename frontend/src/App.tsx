import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import FilterMenu from "./components/FilterMenu";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FilterMenu />
    </div>
  );
}

export default App;
