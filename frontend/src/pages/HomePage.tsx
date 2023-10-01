import React from 'react';
import logo from './logo.svg';
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
      <FilterMenu />
      <PostCard />
    </div>
  );
}