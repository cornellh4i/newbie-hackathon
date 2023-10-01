import React from 'react';
import Navbar from '../components/Navbar';
import PostButton from '../components/PostButton';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FilterMenu from '../components/FilterMenu';
import PostCard from '../components/PostCard';

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <PostButton />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ marginLeft: '20px', marginTop: '-50px' }}>
          <FilterMenu />
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '20px' }}>
          <PostCard />
        </div>
      </div>
    </div >
  );
}