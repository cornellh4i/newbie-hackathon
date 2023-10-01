import './BottomNavigation.css';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Divider } from '@mui/material';
import Stack from '@mui/material/Stack';
import HomeworkForumLogo from '../images/HomeworkForumLogo.svg';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={false} disableGutters>
        <Box sx={{ bgcolor: '#EFEFEF', height: '378px' }}>
          <Stack
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={2}
            divider={<Divider orientation='vertical' flexItem />}
            alignContent={'center'}
          >
            <Box sx={{ fontSize: 'sm', color: 'text.tertiary' }}>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                style={{ alignSelf: 'center' }}
              >
                <img
                  src={HomeworkForumLogo}
                  className='Homework-logo'
                  width={145}
                  height={254}
                />
                <Stack
                  spacing={2}
                  direction="column"
                  fontStyle='normal'
                  color='#3F72C0'
                  fontWeight='700'
                  textAlign='left'
                >
                  <h2>{'HomeworkForum'}</h2>
                  <h3>{'Revolutionizing how homework is discussed.'}</h3>
                </Stack>
              </Stack>
            </Box>
            <Box>
              <List sx={{ fontSize: '24px', color: '#80889B', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', lineHeight: '40px', margin: '2' }}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Home" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="My Posts" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Trending News" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="About Us" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Contact" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Privacy" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
            <Stack sx={{
              fontSize: '24px',
              color: '#80889B',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '40px',
              alignContent: 'center'
            }} >
              <sub> <b>Subscribe for recent news</b></sub>
              <Box
                sx={{
                  width: 476,
                  height: 79,
                  borderColor: '#80889B',
                  border: 1,
                  borderRadius: 5,
                  alignContent: 'flex-align',
                  alignItems: 'center',
                  textAlign: 'center'
                }}
              >
                <Stack
                  spacing={2}
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  height={79}
                  divider={<Divider orientation='vertical' flexItem />}
                >
                  <InputBase
                    sx={{
                      top: 0,
                      left: 15,
                      ml: 1,
                      flex: 1,
                      alignContent: 'center'
                    }}
                    placeholder="Your email here"
                    inputProps={{ 'aria-label': 'email' }}
                  />
                  {/* <Divider
                    orientation='vertical'
                    flexItem
                  /> */}
                  <Button
                    style={{
                      top: 0,
                      left: -10,
                      color: 'gray'
                    }}
                    variant="text"
                  >
                    <b>Subscribe</b>
                  </Button>
                </Stack>
              </Box>
              <Box
                sx={{
                  fontSize: '12px',
                  color: '#A6ADBD'
                }}
              >
                <FormGroup>
                  <FormControlLabel control={<Checkbox />} label="By checking this box, you agree to receiving company news and updates" />
                </FormGroup>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </React.Fragment >
  );
}

