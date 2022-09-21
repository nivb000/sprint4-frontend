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
                <Link style={{ textDecoration: 'none', color:'black' }} to={`/trips/${user._id}`}><li >Trips</li></Link>
                <li onClick={() => handleOnClick(handleLogout)}>Logout</li>
            </>
            }
            <hr />
            <li>Host Your Home</li>

        </ul>
    </div >
}