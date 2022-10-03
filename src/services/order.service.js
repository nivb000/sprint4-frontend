import { httpService } from './http.service.js'

export const orderService = {
    getById,
    query,
    remove,
    save
}

const KEY = 'order'

function query(userId) {
    return httpService.get(KEY, userId)
        .then(orders => {
            if (!orders || !orders.length) {
                console.log('no orders');
            }
            return orders
        })
}

function getById(orderId) {
    return httpService.get(`${KEY}/${orderId}`)
}

function remove(orderId) {
    return httpService.delete(`${KEY}/${orderId}`)
}

function save(order) {
    if (order._id) return httpService.put(`${KEY}/${order._id}`, order)
    else return httpService.post(KEY, order)
}
