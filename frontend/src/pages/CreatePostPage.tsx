import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import Navbar from '../components/Navbar';
import { Link, useNavigate } from 'react-router-dom';

export default function CreatePostPage() {
  const [title, setTitle] = useState('');
  const [postText, setPostText] = useState('');
  const [course, setCourse] = useState('');

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!title || !postText || !course) {
      window.alert('Please fill in all fields');
      return;
    }
    navigate('/');
  };

  return (
    <div>
      <Navbar />
      <Container maxWidth="sm">
        <Typography variant="h3" gutterBottom style={{ marginTop: '16px' }}>
          Add a New Post
        </Typography>
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Post Text"
          variant="outlined"
          fullWidth
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Course"
          variant="outlined"
          fullWidth
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          onClick={handleSubmit}
          style={{ marginTop: '16px' }}
        >
          Confirm
        </Button>
      </Container>
    </div>
  );
}
