import { useState } from "react"
import { useDispatch } from "react-redux"
import { loginUser } from '../store/user.action'

export const LoginSignup = ({ handleClose }) => {

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
        handleClose()
    }


    return <section className="login-modal">
        <button className="modal-close-btn" onClick={handleClose}>X</button>
        <h1>Log In</h1>
        <form onSubmit={handleLogin}>
            <div className="form-item">
                <input type="text" id="username" name="username" placeholder="Username" onChange={handleChange} />
            </div>
            <div className="form-item">
                <input type="password" id="password" name="password" placeholder="Password" onChange={handleChange} />
            </div>
            <div className="btn-container" onClick={handleLogin}>
                {Array(79).fill(<div className="cell"></div>)}
                <div className="content">
                    <button className="action-btn">
                        Login
                    </button>
                </div>
            </div>
        </form>
    </section>
}