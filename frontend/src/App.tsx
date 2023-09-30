import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import PostCard from './components/PostCard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <PostCard />
    </div>
  );
}

export default App;
