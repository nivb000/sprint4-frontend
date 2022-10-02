import { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Paper from '@mui/material/Paper';
import { LoginSignup } from './login-signup';
import { Link } from 'react-router-dom'


export const BottomNav = () => {
  const [value, setValue] = useState(0)
  const [isShown, setIsShown] = useState(false)


  const handleClick = () => {
    setIsShown(current => !current);
  }

  return (
    <Box className='bottom-nav' sx={{ width: 'auto' }}>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}>
          <BottomNavigationAction label="Explore" icon={<SearchIcon />} />
          <BottomNavigationAction label="My trips" icon={<FavoriteBorderIcon />} />
          <BottomNavigationAction onClick={handleClick} label="Log in" icon={<AccountCircleIcon />} />
          {isShown && <LoginSignup />}
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
