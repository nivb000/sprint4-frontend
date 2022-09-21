import { httpService } from './http.service.js'

export const orderService = {
    getById,
    query,
    remove,
    save
}

const KEY = 'order'

function query(filter) {

    return httpService.get(KEY)
        .then(orders => {
            if (!orders || !orders.length) {
                console.log('no orders');
            }
            if (filter) {
                let { name, inStock } = filter
                orders = orders.filter(order => order.name.includes(name))
                orders = orders.filter(order => (inStock === true) ? order.inStock : order)
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
