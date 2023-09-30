import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import PostCard from './components/PostCard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <PostCard username="Username" title="Lab 5 Question" question="for the 
      layout 2 of lab 5, is it okay if the orange <hi> element ( with text 
      'Layout2') changes width as you change the screen size? Or does it have 
      to be fixed as shown in the video?" course="CS1110" rank={5} comments={["hi", "hi"]} />
    </div>
  );
}

export default App;
