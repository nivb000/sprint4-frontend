import { LoginSignup } from './login-signup';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'


export const UserNav = ({ setLoginModal, setUserNav, handleLogout }) => {

    const user = useSelector(state => state.userModule.user)

    const handleOnClick = (func) => {
        setUserNav()
        func()
    }

    return <div className="user-nav">
        <ul>
            {!user ?
            <>
                <li>Sign up</li>
                <li onClick={() => handleOnClick(setLoginModal)}>Log in</li>
            </> 
            : <>
                <li>Trips</li>
                <li onClick={() => handleOnClick(handleLogout)}>Logout</li>
            </>
            }
        <hr />
        <li>Host Your Home</li>
        <Link className='host-nav-link' to={`/host` }>
        <li>Host Dashboard</li> 
         </Link> 
        
    </ul>
    </div >
}