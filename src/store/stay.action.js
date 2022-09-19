import { stayService } from '../services/stay.service.js'

export function loadStays() {
    return (dispatch, getState) => {
        const { filter } = getState().stayModule
        stayService.query(filter)
            .then(stays => dispatch({ type: 'SET_STAYS', stays }))
    }
}
export function addStay(stay) {
    return (dispatch) => {
        stayService.save(stay)
            .then(stay => dispatch({ type: 'ADD_STAY', stay }))
    }
}
export function updateStay(stay) {
    return (dispatch) => {
        stayService.save(stay)
            .then(stay => dispatch({ type: 'UPDATE_STAY', stay }))
    }
}
export function removeStay(stayId) {
    return (dispatch) => {
        stayService.remove(stayId)
            .then(() => dispatch({ type: 'REMOVE_STAY', stayId }))
    }
}