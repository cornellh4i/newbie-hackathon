import React from 'react';
import logo from './logo.svg';
import Navbar from '../components/Navbar';
import PostButton from '../components/PostButton';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <PostButton />
    </div>
  );
}