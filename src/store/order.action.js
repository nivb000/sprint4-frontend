import { orderService } from '../services/order.service.js'

export function loadOrders() {
    return (dispatch) => {
        orderService.query()
            .then(orders => dispatch({ type: 'SET_ORDERS', orders }))
            }
        }
export function loadOrdersByHost() {
    return (dispatch, getState) => {
        const { user } = getState().userModule
        orderService.query(user)
            .then(orders => dispatch({ type: 'SET_ORDERS', orders }))
    }
}
export function addOrder(order) {
    return (dispatch) => {
        orderService.save(order)
            .then(order => dispatch({ type: 'ADD_ORDER', order }))
    }
}
export function updateOrder(order) {
    return (dispatch) => {
        orderService.save(order)
            .then(order => dispatch({ type: 'UPDATE_ORDER', order }))
    }
}
export function removeOrder(orderId) {
    return (dispatch) => {
        orderService.remove(orderId)
            .then(() => dispatch({ type: 'REMOVE_ORDER', orderId }))
    }
}