import { orderService } from '../services/order.service.js'

export function loadStays() {
    return (dispatch, getState) => {
        // const { filter } = getState().orderModule
        orderService.query()
            .then(orders => dispatch({ type: 'SET_ORDERS', orders }))
    }
}
export function addStay(order) {
    return (dispatch) => {
        orderService.save(order)
            .then(order => dispatch({ type: 'ADD_ORDER', order }))
    }
}
export function updateStay(order) {
    return (dispatch) => {
        orderService.save(order)
            .then(order => dispatch({ type: 'UPDATE_ORDER', order }))
    }
}
export function removeStay(orderId) {
    return (dispatch) => {
        orderService.remove(orderId)
            .then(() => dispatch({ type: 'REMOVE_ORDER', orderId }))
    }
}