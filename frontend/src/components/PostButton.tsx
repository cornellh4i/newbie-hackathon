import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'flex-end', // Align items to the right
    alignItems: 'center', // Vertically center the Button
    borderRadius: '20px', // Add rounded corners
    padding: '10px', // Add some padding
  },
  button: {
    borderRadius: '20px', // Rounded corners for the Button
    padding: '5px 75px',
    fontFamily: 'Arial, sans-serif', // Change the font family
    fontSize: '17px' // Increase the font size
  },
};


export default function PostButton() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/createpost');
  };

  return (
    <Container sx={styles.container}>
      <Button onClick={handleNavigate} variant="contained" sx={styles.button}>
        Post
      </Button>
    </Container>
  );
}
