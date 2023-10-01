import React from 'react';
import Navbar from '../components/Navbar';
import PostButton from '../components/PostButton';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FilterMenu from '../components/FilterMenu';
import PostCard from '../components/PostCard';

export default function CommentsPage() {
  return (
    <div>
      <Navbar />
      <PostButton />
      <h1>Comments page (Not done) !</h1>

    </div >
  );
}