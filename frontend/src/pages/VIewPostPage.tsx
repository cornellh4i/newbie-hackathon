import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Navbar from '../components/Navbar';
import { useParams, Link } from 'react-router-dom';
import PostCard from '../components/PostCard';
import PostView from '../components/PostView';

export default function ViewPostPage() {
  // const { postId } = useParams();
  // const post = getPostDataById(postId);


  return (
    <div>
      <Navbar />
      <PostView
        username="dummyUsername"
        title="Dummy Title"
        question="This is a dummy question. This is a dummy question. This is a dummy question. This is a dummy question. This is a dummy question. This is a dummy question. This is a dummy question. This is a dummy question. "
        course="dummyCourse"
        rank={662}
      />
      {/* component to display post similar to postcard */}
      {/* component that makes a get for all the comments of a post and displays them as paragraphs */}
      {/* component that allows making a new comment on a post using a post*/}
    </div>
  );
}
