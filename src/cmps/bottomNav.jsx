import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Paper from '@mui/material/Paper';
import { LoginSignup } from './login-signup';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../store/user.action';
import Backdrop from '@mui/material/Backdrop';


export const BottomNav = () => {


  const userImgStyle = {
    width: '25px',
    zIndex: '9',
    borderRadius: '50%'
  }


  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(state => state.userModule.user)
  const [value, setValue] = useState(0)
  const [backDrop, setBackDrop] = useState(false)


  useEffect(() => {
    if (value === 0) navigate('/')
    if (value === 1 && user) navigate(`/trips/${user._id}`)
    if(value === 1 && !user) setValue(2)
    if (value === 2) setBackDrop(true)
  }, [value])

  const handleLogout = () => {
    dispatch(logoutUser())
  }


  return (
    <Box className='bottom-nav' sx={{ width: '100%' }}>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}>
          <BottomNavigationAction label="Explore" icon={<SearchIcon />} />
          <BottomNavigationAction label="My trips" icon={<FavoriteBorderIcon />} />
          {user ? 
          <BottomNavigationAction label="Log out" icon={<img src={user.imgUrl} alt="user" style={userImgStyle} />} onClick={handleLogout} /> 
          : 
          <BottomNavigationAction label="Log in" icon={<AccountCircleIcon />} /> }
        </BottomNavigation>
      </Paper>
      <Backdrop sx={{ color: '#222', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={backDrop}>
        <LoginSignup handleClose={() => setBackDrop(false)} />
      </Backdrop>
    </Box>
  );
}
