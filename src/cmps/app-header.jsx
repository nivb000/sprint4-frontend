import { Link } from 'react-router-dom'
import airbnalogo from '../assets/imgs/airbna-logo.png';
import logo from '../assets/imgs/logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import userProfilePic from '../assets/imgs/header-icons/userprofle.jpg'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import { useState } from 'react'
import { LoginSignup } from './login-signup';
import { useSelector } from 'react-redux';
import { UserNav } from './user-nav';
import { ExpendedHeader } from './expended-header'
import Backdrop from '@mui/material/Backdrop';

export const AppHeader = () => {

    const user = useSelector(state => state.userModule.user)
    const [userNavIsOpen, setUserNavIsOpen] = useState(false)
    const [expendedIsOpen, setExpendedIsOpen] = useState(false)
    const [backDrop, setBackDrop] = useState(false)

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


    return <header className='app-header'>
        {!expendedIsOpen ? <section className='main-layout main-header'>
            <Link style={{ textDecoration: 'none' }} to={`/`}>
                <div className='logo'>
                    <img src={airbnalogo} alt='logo' />
                    <img src={logo} alt='logo' />
                </div>
            </Link >
            <div className='search-container' onClick={() => setExpendedIsOpen(prev => !prev)}>
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
                            <SearchIcon fontSize='small' sx={{ color: 'white', marginBottom: '1.5px' }} />
                        </Fab>
                    </ThemeProvider>
                </div>
            </div>
            <div className='header-user'>
                <div className='nav-user' onClick={() => setUserNavIsOpen(prev => !prev)}>
                    <MenuIcon className='nav-icon' fontSize='small' />
                    {user ? <img src={user.imgUrl} alt="user profile" />
                        : <img src={userProfilePic} style={{ opacity: '0.5' }} alt="user profile" />}
                </div>
            </div>
        </section> : <ExpendedHeader setExpendedIsOpen={setExpendedIsOpen} />
        }


        <Backdrop
            sx={{ color: '#222', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={backDrop}>
            <LoginSignup handleClose={() => setBackDrop(false)} />
        </Backdrop>
        
        {userNavIsOpen &&
            <UserNav
                setUserNav={() => setUserNavIsOpen(prev => !prev)}
                setBackDrop={() => setBackDrop(prev => !prev)}
            />}
    </header>
}