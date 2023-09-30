import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import FilterMenu from "./components/FilterMenu";
import "./components/FilterMenu.css";
import PostCard from './components/PostCard';

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Inter:400,700&display=swap"
      />
      <Navbar />
      <FilterMenu />
      <PostCard username="Username" title="Lab 5 Question" question="for the 
      layout 2 of lab 5, is it okay if the orange <hi> element ( with text 
      'Layout2') changes width as you change the screen size? Or does it have 
      to be fixed as shown in the video?" course="CS1110" rank={5} comments={["hi", "hi"]} />
    </div>
  );
}

export default App;
