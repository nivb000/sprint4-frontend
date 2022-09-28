import { Link } from 'react-router-dom'
import logo from '../assets/imgs/airbna-logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import userProfilePic from '../assets/imgs/header-icons/userprofle.jpg'
import { useState, useRef } from 'react'
import { LoginSignup } from './login-signup';
import { useSelector } from 'react-redux';
import { UserNav } from './user-nav';
import { useSearchParams } from 'react-router-dom';

export const ExpendedHeader = ({ setExpendedIsOpen }) => {

    const checkInRef = useRef()
    const checkOutRef = useRef()
    const user = useSelector(state => state.userModule.user)
    const [loginModalIsOpen, setLoginModalIsOpen] = useState(false)
    const [userNavIsOpen, setUserNavIsOpen] = useState(false)
    const [locationsModalIsOpen, setLocationsModalIsOpen] = useState(false)
    const [locIsActive, setLocIsActive] = useState(false)
    const [checkInIsActive, setCheckInIsActive] = useState(false)
    const [checkOutIsActive, setCheckOutIsActive] = useState(false)
    const [guestsIsActive, setGuestsIsActive] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()
    const [query, setQuery] = useState({
        location: '',
        guests: 1
    })

    const handleCheckInBlur = () => {
        (checkInRef.current.type = 'text')
        setCheckInIsActive(false)
    }
    const handleCheckOutBlur = () => {
        (checkOutRef.current.type = 'text')
        setCheckOutIsActive(false)
    }
    const handleLocBlur = () => {
        setTimeout(() => {
            setLocationsModalIsOpen(false)
            setLocIsActive(false)
        }, 500);
    }
    
    const handleChange = ({ target }) => {
        const name = target.name
        const value = target.value
        setQuery(prev => ({ ...prev, [name]: value }))
    }
    const handleSubmit = () => {
        setSearchParams(query)
        setExpendedIsOpen(false)
    }
    const btnLabels = [
        `I'm flexible`,
        'Greece',
        'Italy',
        'Middle East',
        'South America',
        'United States',
    ]


    return <header className='app-header'>
        <style>{".overlay {background-color: rgba(0, 0, 0, 0.25); z-index: 3}"}</style>
        <section className='main-layout main-header'>
            <Link style={{ textDecoration: 'none' }} to={`/`}>
                <div className='logo' onClick={() => setExpendedIsOpen(false)}>
                    <img src={logo} alt='logo' />
                </div>
            </Link >
            <div className='header-user'>
                <div className='nav-user' onClick={() => setUserNavIsOpen(prev => !prev)}>
                    <MenuIcon className='nav-icon' fontSize='small' />
                    {user ? <img src={user.imgUrl} alt="user profile" />
                        : <img src={userProfilePic} style={{ opacity: '0.5' }} alt="user profile" />}
                </div>
            </div>
            {loginModalIsOpen && <LoginSignup setLoginModal={() => setLoginModalIsOpen(prev => !prev)} />}
            {userNavIsOpen &&
                <UserNav
                    setLoginModal={() => setLoginModalIsOpen(prev => !prev)}
                    setUserNav={() => setUserNavIsOpen(prev => !prev)}
                />}
        </section>
        {locationsModalIsOpen &&
        <div className='locations-modal'>
            <div className='locations-modal-container'>
                <h3>Search by region</h3>
                <div className='locations-modal-map'>
                    {btnLabels.map(label =>      
                        <div className={`loc ${label}`}>
                            <img src={require(`../assets/imgs/header-icons/${label}.png`)} alt={label}
                                onClick={()=>setQuery(prev => ({ ...prev, location: label }))}
                            />
                            <p>{label}</p>
                        </div>
                        )}
                </div>
            </div>
        </div>
        }
        <section className='expended-search'>
            <div className="bar">
                <div className={locIsActive ? 'location active' : 'location'} onClick={() => setLocIsActive(true)}>
                    <p>Where</p>
                    <input type="text" name='location' value={query.location} placeholder="Search destinations"
                    onFocus={()=> setLocationsModalIsOpen(true)}
                    onBlur={handleLocBlur} onChange={handleChange} />
                </div>

                <div className={checkInIsActive ? 'check-in active' : 'check-in'} onClick={() => setCheckInIsActive(true)}>
                    <p>Check in</p>
                    <input type="text" name='checkIn' placeholder="Add dates" ref={checkInRef}
                        onFocus={() => (checkInRef.current.type = "date")}
                        onBlur={handleCheckInBlur}
                        onChange={handleChange} />
                </div>
                <div className={checkOutIsActive ? 'check-out active' : 'check-out'} onClick={() => setCheckOutIsActive(true)}>
                    <p>Check out</p>
                    <input type="text" name='checkOut' placeholder="Add dates" ref={checkOutRef}
                        onFocus={() => (checkOutRef.current.type = "date")}
                        onBlur={handleCheckOutBlur}
                        onChange={handleChange} />
                </div>
                <div className={guestsIsActive ? 'guests active' : 'guests'} onClick={() => setGuestsIsActive(true)}>
                    <p>Who</p>
                    <input type="number" name='guests' placeholder="Add guests" onBlur={() => setGuestsIsActive(false)} onChange={handleChange} />
                    <span onClick={handleSubmit}>
                        <SearchIcon fontSize='small' sx={{ color: 'white' }} />
                    </span>
                </div>
            </div>
        </section>
    </header>
}



