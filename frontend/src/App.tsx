// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import PostButton from './components/PostButton';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CreatePostPage from './pages/CreatePostPage';
import HomePage from './pages/HomePage';

import FilterMenu from "./components/FilterMenu";
import "./components/FilterMenu.css";
import PostCard from './components/PostCard';
import CommentsPage from './pages/CommentsPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/createpost' element={<CreatePostPage />} />
          <Route path='/comments' element={<CommentsPage />} />
        </Routes>
      </BrowserRouter>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Inter:400,700&display=swap"
      />
    </div>
  );
}

export default App;
