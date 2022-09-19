import { userService } from "../services/user.service.js"

export function loginUser(user) {
    return (dispatch) => {
        userService.login(user)
            .then(user => dispatch({ type: 'SET_USER', user }))
    }
}
export function logoutUser() {
    return (dispatch) => {
        userService.logout()
            .then(dispatch({ type: 'LOGOUT'}))
    }
}