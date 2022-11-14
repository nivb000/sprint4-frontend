import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../store/user.action'
import { Link } from 'react-router-dom'


export const UserNav = ({ setUserNav, setBackDrop }) => {

    const dispatch = useDispatch()

    const user = useSelector(state => state.userModule.user)
    const handleOnClick = (func) => {
        setUserNav()
        func()
    }

    

    const handleLogout = () => {
        dispatch(logoutUser())
        window.location.reload()
    }

    return <div className="user-nav">
        <ul>
            {!user ?
            <>
                <li>Sign up</li>
                <li onClick={() => handleOnClick(setBackDrop)}>Log in</li>
            </> 
            : <>
                <Link to={`/trips/${user._id}`} onClick={setUserNav}><li>Trips</li></Link>
                <Link to={`/host/${user._id}`} onClick={setUserNav}><li>Dashboard</li></Link>
                <li onClick={() => handleOnClick(handleLogout)}>Logout</li>
            </>
            }
            <hr />
            <li>Host Your Home</li>
        </ul>
    </div >
}