import { useState } from "react"
import { useDispatch } from "react-redux"
import { loginUser, logoutUser } from '../store/user.action'

export const LoginSignup = ({ setLoginModal, user }) => {

    const dispatch = useDispatch()
    const [creds, setCreds] = useState({
        username: '',
        password: ''
    })

    const handleChange = ({ target }) => {
        const name = target.name
        const value = target.value
        setCreds(prevCred => ({ ...prevCred, [name]: value }))
    }


    const handleLogin = (ev) => {
        ev.preventDefault()
        dispatch(loginUser(creds))
    }

    const handleLogout = () => {
        dispatch(logoutUser())
    }


    return <section className="login-modal" onSubmit={handleLogin}>
        <button className="modal-close-btn" onClick={setLoginModal}>X</button>
        <h1>Log In</h1>
        {!user ? 
        <form>
            <div className="form-item">
                {/* <label htmlFor="username">Username</label> */}
                <input type="text" id="username" name="username" placeholder="Username" onChange={handleChange} />
            </div>
            <div className="form-item">
                {/* <label htmlFor="password">Password</label> */}
                <input type="password" id="password" name="password" placeholder="Password" onChange={handleChange} />
            </div>
            <div className="btn-container" onClick={handleLogin}>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="content">
                    <button className="action-btn">
                        Login
                    </button>
                </div>
            </div>
        </form>
        : 
        <button onClick={handleLogout}>Logout</button> 
        }
    </section>
}