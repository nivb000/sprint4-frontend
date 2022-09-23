import { Link } from 'react-router-dom'
import logo from '../assets/imgs/logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import userProfilePic from '../assets/imgs/header-icons/userprofle.jpg'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import { useState } from 'react'
import { LoginSignup } from './login-signup';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../store/user.action'
import { UserNav } from './user-nav';

export const AppHeader = () => {

    const user = useSelector(state => state.userModule.user)
    const dispatch = useDispatch()
    const [loginModalIsOpen, setLoginModalIsOpen] = useState(false)
    const [userNavIsOpen, setUserNavIsOpen] = useState(false)

    const theme = createTheme({
        components: {
            MuiFab: {
                styleOverrides: {
                    root: {
                        backgroundColor: '#ff385c',
                        boxShadow: '0 0 0 0',
                        "&:hover": {
                            backgroundColor: '#ff385c'
                        }
                    }
                },
            },
        },
    });

    const handleLogout = () => {
        dispatch(logoutUser())
    }


    return <header className='app-header'>
        <section className='main-layout main-header opened'>
            <Link style={{ textDecoration: 'none' }} to={`/`}>
                <div className='logo'>
                    <img src={logo} alt='logo' />
                    <h3>airbna</h3>
                </div>
            </Link >
            <div className='search-container'>
                <button className='left'>
                    <div>Anywhere</div>
                </button>
                <button className='middle'>
                    <div>Any week</div>
                </button>
                <div className='right'>
                    <div>Add guests</div>
                    <ThemeProvider theme={theme}>
                        <Fab size='small' sx={{ transform: 'scale(0.8)' }}>
                            <SearchIcon fontSize='small' sx={{ color: 'white' }} />
                        </Fab>
                    </ThemeProvider>
                </div>
            </div>
            {/* <div className='opened-search-bar'>
                <div className='search-dest'>
                    <span>Where</span>
                    <input type="text" placeholder='Search destinations' />
                </div>
                <div className='check-in'>
                    <span>Check in</span>
                    <input type="text" placeholder='Search destinations' />
                </div>
                <div className='check-out'>
                    <span>Check out</span>
                    <input type="text" placeholder='Search destinations' />
                </div>
                <div className='who-guests'>
                    <span>Who</span>
                    <input type="text" placeholder='Search destinations' />
                    <button>Search</button>
                </div>
            </div> */}



            <div className='header-user'>
                <div className='nav-user' onClick={() => setUserNavIsOpen(prev => !prev)}>
                    <MenuIcon className='nav-icon' fontSize='small' />
                    {user ? <img src={user.imgUrl} />
                        : <img src={userProfilePic} />}
                </div>
            </div>
        </section>

        {loginModalIsOpen && <LoginSignup setLoginModal={() => setLoginModalIsOpen(prev => !prev)} />}
        {userNavIsOpen &&
            <UserNav
                setLoginModal={() => setLoginModalIsOpen(prev => !prev)}
                setUserNav={() => setUserNavIsOpen(prev => !prev)}
                handleLogout={handleLogout}
            />}
    </header>
}