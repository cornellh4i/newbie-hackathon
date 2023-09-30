import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Stack from '@mui/material/Stack';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: '30ch',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '30ch',
        '&:focus': {
          width: '30ch',
        },
      },
    },
  }));


  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        direction="row"
        alignItems="center"
        marginTop={3}
        marginBottom={2.5}
      >
        <Box display='flex' justifyContent='flex-start'>
          <Container >
            <svg width="400" height="65" viewBox="0 0 480 65" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="37" height="57.3529" fill="#3F72C0" />
              <rect x="6.29785" y="6.37256" width="24.7979" height="13.1699" fill="white" />
              <rect x="2.75537" y="41.634" width="7.47872" height="19.1176" fill="#3F72C0" />
              <path d="M2.75536 65L2.75536 60.7516H6.69153L2.75536 65Z" fill="#3F72C0" />
              <path d="M10.2217 64.9606L10.2335 60.6382L6.11878 60.625L10.2217 64.9606Z" fill="#3F72C0" />
              <path d="M79.0341 46V11.0909H86.4148V25.4943H101.398V11.0909H108.761V46H101.398V31.5795H86.4148V46H79.0341ZM126.54 46.5114C123.892 46.5114 121.602 45.9489 119.67 44.8239C117.75 43.6875 116.267 42.108 115.222 40.0852C114.176 38.0511 113.653 35.6932 113.653 33.0114C113.653 30.3068 114.176 27.9432 115.222 25.9205C116.267 23.8864 117.75 22.3068 119.67 21.1818C121.602 20.0455 123.892 19.4773 126.54 19.4773C129.188 19.4773 131.472 20.0455 133.392 21.1818C135.324 22.3068 136.812 23.8864 137.858 25.9205C138.903 27.9432 139.426 30.3068 139.426 33.0114C139.426 35.6932 138.903 38.0511 137.858 40.0852C136.812 42.108 135.324 43.6875 133.392 44.8239C131.472 45.9489 129.188 46.5114 126.54 46.5114ZM126.574 40.8864C127.778 40.8864 128.784 40.5455 129.591 39.8636C130.398 39.1705 131.006 38.2273 131.415 37.0341C131.835 35.8409 132.045 34.483 132.045 32.9602C132.045 31.4375 131.835 30.0795 131.415 28.8864C131.006 27.6932 130.398 26.75 129.591 26.0568C128.784 25.3636 127.778 25.017 126.574 25.017C125.358 25.017 124.335 25.3636 123.506 26.0568C122.688 26.75 122.068 27.6932 121.648 28.8864C121.239 30.0795 121.034 31.4375 121.034 32.9602C121.034 34.483 121.239 35.8409 121.648 37.0341C122.068 38.2273 122.688 39.1705 123.506 39.8636C124.335 40.5455 125.358 40.8864 126.574 40.8864ZM144.148 46V19.8182H151.068V24.4375H151.375C151.92 22.9034 152.83 21.6932 154.102 20.8068C155.375 19.9205 156.898 19.4773 158.67 19.4773C160.466 19.4773 161.994 19.9261 163.256 20.8239C164.517 21.7102 165.358 22.9148 165.778 24.4375H166.051C166.585 22.9375 167.551 21.7386 168.949 20.8409C170.358 19.9318 172.023 19.4773 173.943 19.4773C176.386 19.4773 178.369 20.2557 179.892 21.8125C181.426 23.358 182.193 25.5511 182.193 28.392V46H174.949V29.8239C174.949 28.3693 174.563 27.2784 173.79 26.5511C173.017 25.8239 172.051 25.4602 170.892 25.4602C169.574 25.4602 168.545 25.8807 167.807 26.7216C167.068 27.5511 166.699 28.6477 166.699 30.0114V46H159.659V29.6705C159.659 28.3864 159.29 27.3636 158.551 26.6023C157.824 25.8409 156.864 25.4602 155.67 25.4602C154.864 25.4602 154.136 25.6648 153.489 26.0739C152.852 26.4716 152.347 27.0341 151.972 27.7614C151.597 28.4773 151.409 29.3182 151.409 30.2841V46H144.148ZM199.861 46.5114C197.168 46.5114 194.849 45.9659 192.906 44.875C190.974 43.7727 189.486 42.2159 188.44 40.2045C187.395 38.1818 186.872 35.7898 186.872 33.0284C186.872 30.3352 187.395 27.9716 188.44 25.9375C189.486 23.9034 190.957 22.3182 192.855 21.1818C194.764 20.0455 197.003 19.4773 199.571 19.4773C201.298 19.4773 202.906 19.7557 204.395 20.3125C205.895 20.858 207.202 21.6818 208.315 22.7841C209.44 23.8864 210.315 25.2727 210.94 26.9432C211.565 28.6023 211.878 30.5455 211.878 32.7727V34.767H189.77V30.267H205.043C205.043 29.2216 204.815 28.2955 204.361 27.4886C203.906 26.6818 203.276 26.0511 202.469 25.5966C201.673 25.1307 200.747 24.8977 199.69 24.8977C198.588 24.8977 197.611 25.1534 196.759 25.6648C195.918 26.1648 195.259 26.8409 194.781 27.6932C194.304 28.5341 194.06 29.4716 194.048 30.5057V34.7841C194.048 36.0795 194.287 37.1989 194.764 38.142C195.253 39.0852 195.94 39.8125 196.827 40.3239C197.713 40.8352 198.764 41.0909 199.98 41.0909C200.787 41.0909 201.526 40.9773 202.196 40.75C202.866 40.5227 203.44 40.1818 203.918 39.7273C204.395 39.2727 204.759 38.7159 205.009 38.0568L211.724 38.5C211.384 40.1136 210.685 41.5227 209.628 42.7273C208.582 43.9205 207.23 44.8523 205.571 45.5227C203.923 46.1818 202.02 46.5114 199.861 46.5114ZM221.594 46L214.469 19.8182H221.815L225.872 37.4091H226.111L230.338 19.8182H237.548L241.844 37.3068H242.065L246.054 19.8182H253.384L246.276 46H238.588L234.088 29.5341H233.764L229.264 46H221.594ZM268.43 46.5114C265.783 46.5114 263.493 45.9489 261.561 44.8239C259.641 43.6875 258.158 42.108 257.112 40.0852C256.067 38.0511 255.544 35.6932 255.544 33.0114C255.544 30.3068 256.067 27.9432 257.112 25.9205C258.158 23.8864 259.641 22.3068 261.561 21.1818C263.493 20.0455 265.783 19.4773 268.43 19.4773C271.078 19.4773 273.362 20.0455 275.283 21.1818C277.214 22.3068 278.703 23.8864 279.749 25.9205C280.794 27.9432 281.317 30.3068 281.317 33.0114C281.317 35.6932 280.794 38.0511 279.749 40.0852C278.703 42.108 277.214 43.6875 275.283 44.8239C273.362 45.9489 271.078 46.5114 268.43 46.5114ZM268.464 40.8864C269.669 40.8864 270.675 40.5455 271.482 39.8636C272.288 39.1705 272.896 38.2273 273.305 37.0341C273.726 35.8409 273.936 34.483 273.936 32.9602C273.936 31.4375 273.726 30.0795 273.305 28.8864C272.896 27.6932 272.288 26.75 271.482 26.0568C270.675 25.3636 269.669 25.017 268.464 25.017C267.249 25.017 266.226 25.3636 265.396 26.0568C264.578 26.75 263.959 27.6932 263.538 28.8864C263.129 30.0795 262.925 31.4375 262.925 32.9602C262.925 34.483 263.129 35.8409 263.538 37.0341C263.959 38.2273 264.578 39.1705 265.396 39.8636C266.226 40.5455 267.249 40.8864 268.464 40.8864ZM286.038 46V19.8182H293.078V24.3864H293.351C293.828 22.7614 294.629 21.5341 295.754 20.7045C296.879 19.8636 298.175 19.4432 299.641 19.4432C300.004 19.4432 300.396 19.4659 300.817 19.5114C301.237 19.5568 301.607 19.6193 301.925 19.6989V26.142C301.584 26.0398 301.112 25.9489 300.51 25.8693C299.908 25.7898 299.357 25.75 298.857 25.75C297.788 25.75 296.834 25.983 295.993 26.4489C295.163 26.9034 294.504 27.5398 294.016 28.358C293.538 29.1761 293.3 30.1193 293.3 31.1875V46H286.038ZM312.259 38.4659L312.276 29.7557H313.332L321.719 19.8182H330.054L318.787 32.9773H317.065L312.259 38.4659ZM305.679 46V11.0909H312.94V46H305.679ZM322.043 46L314.338 34.5966L319.179 29.4659L330.548 46H322.043ZM333.753 46V11.0909H356.866V17.1761H341.134V25.4943H355.332V31.5795H341.134V46H333.753ZM371.602 46.5114C368.955 46.5114 366.665 45.9489 364.733 44.8239C362.813 43.6875 361.33 42.108 360.284 40.0852C359.239 38.0511 358.716 35.6932 358.716 33.0114C358.716 30.3068 359.239 27.9432 360.284 25.9205C361.33 23.8864 362.813 22.3068 364.733 21.1818C366.665 20.0455 368.955 19.4773 371.602 19.4773C374.25 19.4773 376.534 20.0455 378.455 21.1818C380.386 22.3068 381.875 23.8864 382.92 25.9205C383.966 27.9432 384.489 30.3068 384.489 33.0114C384.489 35.6932 383.966 38.0511 382.92 40.0852C381.875 42.108 380.386 43.6875 378.455 44.8239C376.534 45.9489 374.25 46.5114 371.602 46.5114ZM371.636 40.8864C372.841 40.8864 373.847 40.5455 374.653 39.8636C375.46 39.1705 376.068 38.2273 376.477 37.0341C376.898 35.8409 377.108 34.483 377.108 32.9602C377.108 31.4375 376.898 30.0795 376.477 28.8864C376.068 27.6932 375.46 26.75 374.653 26.0568C373.847 25.3636 372.841 25.017 371.636 25.017C370.42 25.017 369.398 25.3636 368.568 26.0568C367.75 26.75 367.131 27.6932 366.71 28.8864C366.301 30.0795 366.097 31.4375 366.097 32.9602C366.097 34.483 366.301 35.8409 366.71 37.0341C367.131 38.2273 367.75 39.1705 368.568 39.8636C369.398 40.5455 370.42 40.8864 371.636 40.8864ZM389.21 46V19.8182H396.25V24.3864H396.523C397 22.7614 397.801 21.5341 398.926 20.7045C400.051 19.8636 401.347 19.4432 402.812 19.4432C403.176 19.4432 403.568 19.4659 403.989 19.5114C404.409 19.5568 404.778 19.6193 405.097 19.6989V26.142C404.756 26.0398 404.284 25.9489 403.682 25.8693C403.08 25.7898 402.528 25.75 402.028 25.75C400.96 25.75 400.006 25.983 399.165 26.4489C398.335 26.9034 397.676 27.5398 397.188 28.358C396.71 29.1761 396.472 30.1193 396.472 31.1875V46H389.21ZM425.641 34.8523V19.8182H432.902V46H425.93V41.2443H425.658C425.067 42.7784 424.084 44.0114 422.709 44.9432C421.345 45.875 419.68 46.3409 417.714 46.3409C415.964 46.3409 414.425 45.9432 413.095 45.1477C411.766 44.3523 410.726 43.2216 409.976 41.7557C409.237 40.2898 408.862 38.5341 408.851 36.4886V19.8182H416.112V35.1932C416.124 36.7386 416.538 37.9602 417.357 38.858C418.175 39.7557 419.271 40.2045 420.646 40.2045C421.521 40.2045 422.339 40.0057 423.101 39.608C423.862 39.1989 424.476 38.5966 424.942 37.8011C425.419 37.0057 425.652 36.0227 425.641 34.8523ZM438.71 46V19.8182H445.631V24.4375H445.938C446.483 22.9034 447.392 21.6932 448.665 20.8068C449.938 19.9205 451.46 19.4773 453.233 19.4773C455.028 19.4773 456.557 19.9261 457.818 20.8239C459.08 21.7102 459.92 22.9148 460.341 24.4375H460.614C461.148 22.9375 462.114 21.7386 463.511 20.8409C464.92 19.9318 466.585 19.4773 468.506 19.4773C470.949 19.4773 472.932 20.2557 474.455 21.8125C475.989 23.358 476.756 25.5511 476.756 28.392V46H469.511V29.8239C469.511 28.3693 469.125 27.2784 468.352 26.5511C467.58 25.8239 466.614 25.4602 465.455 25.4602C464.136 25.4602 463.108 25.8807 462.369 26.7216C461.631 27.5511 461.261 28.6477 461.261 30.0114V46H454.222V29.6705C454.222 28.3864 453.852 27.3636 453.114 26.6023C452.386 25.8409 451.426 25.4602 450.233 25.4602C449.426 25.4602 448.699 25.6648 448.051 26.0739C447.415 26.4716 446.909 27.0341 446.534 27.7614C446.159 28.4773 445.972 29.3182 445.972 30.2841V46H438.71Z" fill="#3F72C0" />
            </svg>
          </Container>
        </Box>
        <Box width={650} />
        <Box display='flex' justifyContent='flex-end' component="span" sx={{ border: '2px solid grey', borderRadius: 4 }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search by class, professor"
              inputProps={{ 'aria-label': 'Search by class, professor' }}
            />
          </Search>
        </Box>
      </Stack>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Stack
            direction="column"
            spacing={3}
            sx={{ justifyContent: 'space-between' }}
          >
            <Toolbar disableGutters
              sx={{
                color: '#3F72C0',
                direction: 'row',
                alignContent: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Stack direction={'row'} justifyContent={'space-between'} spacing={'300px'}>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="#app-bar-with-responsive-menu"
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontWeight: 700,
                    color: 'white',
                    textDecoration: 'none',
                    direction: 'row',
                    alignContent: 'space-evenly',
                    wordSpacing: '2px'
                  }}
                >
                  Home
                </Typography>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="#app-bar-with-responsive-menu"
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontWeight: 700,
                    color: 'white',
                    textDecoration: 'none',
                    direction: 'row',
                    alignContent: 'space-evenly',
                    wordSpacing: '2px'
                  }}
                >
                  Popular Posts
                </Typography>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="#app-bar-with-responsive-menu"
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontWeight: 700,
                    color: 'white',
                    textDecoration: 'none',
                    direction: 'row',
                    alignContent: 'space-evenly',
                    wordSpacing: '2px'
                  }}
                >
                  Subjects
                </Typography>
              </Stack>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
              </Box>
              <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                LOGO
              </Typography>
              <Box sx={{ flexGrow: 1 }} /> {/* Add this line */}
              <Box sx={{ display: 'flex', alignItems: 'center', color: 'white', fontWeight: '700' }}>
                <Tooltip title="Open settings">
                  <span onClick={handleOpenUserMenu}>Saved Communities ↓</span>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Stack>

        </Container>
      </AppBar>
    </Stack>
  );
}

export default ResponsiveAppBar;
