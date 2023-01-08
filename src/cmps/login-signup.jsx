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
        <button className="modal-close-btn" onClick={handleClose}>
        <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="-0.5" x2="28.2834" y2="-0.5" transform="matrix(-0.707129 -0.707084 0.722744 -0.691116 21 19.9994)" stroke="black" />
            <line y1="-0.5" x2="28.2833" y2="-0.5" transform="matrix(-0.707083 0.70713 -0.722789 -0.691069 20.9993 0)" stroke="black" />
        </svg>
        </button>
        <h1>Log In</h1>
        <form onSubmit={handleLogin}>
            <div className="form-item">
                <input type="text" id="username" name="username" placeholder="Username" onChange={handleChange} />
            </div>
            <div className="form-item">
                <input type="password" id="password" name="password" placeholder="Password" onChange={handleChange} />
            </div>
            <div className="btn-container" onClick={handleLogin}>
                {Array.from(Array(79), (_, i) => <div className='cell' key={i}></div>)}
                <div className="content">
                    <button className="action-btn">
                        Login
                    </button>
                </div>
            </div>
        </form>
    </section>
}