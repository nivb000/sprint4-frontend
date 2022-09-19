import { LoginSignup } from './login-signup';


export const UserNav = ({ setLoginModal, setUserNav }) => {

    const handleOnClick = (func) => {
        setUserNav()
        func()
    }

    return <div className="user-nav">
        <ul>
            <li>Sign up</li>
            <li onClick={() => handleOnClick(setLoginModal)}>Log in</li>
        <hr />
        <li>Host Your Home</li>
    </ul>
    </div >
}