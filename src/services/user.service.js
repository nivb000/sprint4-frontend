import { httpService } from "./http.service"

const KEY = 'auth'
const KEY_LOGGEDIN = 'loggedinUser'

export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser
}

window.us = userService

async function login(credentials) {
    const user = await httpService.post(`${KEY}/login`, credentials)
    sessionStorage.setItem(KEY_LOGGEDIN, JSON.stringify(user))
    return user
}

function signup(userInfo) {
    userInfo.balance = 10000
    // return storageService.post(KEY, userInfo)
    //     .then((user) => {
    //         sessionStorage.setItem(KEY_LOGGEDIN, JSON.stringify(user))
    //         return user
    //     })
}

function logout() {
    httpService.post(`${KEY}/logout`)
    sessionStorage.setItem(KEY_LOGGEDIN, null)
    return Promise.resolve()
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(KEY_LOGGEDIN))
}

// function updateBalance(diff) {
//     const user = userService.getLoggedinUser()
//     if (!user) return Promise.reject('Login first')

//     if (user.balance + diff < 0) return Promise.reject('Not enough balanace')

//     user.balance += diff
//     return storageService.put(KEY, user)
//         .then((user) => {
//             sessionStorage.setItem(KEY_LOGGEDIN, JSON.stringify(user))
//             return user.balance
//         })
// }