import { httpService } from './http.service.js'

export const stayService = {
    getById,
    query,
    remove,
    save
}

const KEY = 'stay'

async function query(filterBy) {
    try {
        let stays = await httpService.get(KEY)
        if (Object.keys(filterBy).length !== 0) {
            let { type } = filterBy
            stays = stays.filter(stay => (
                stay.type.toLowerCase() === type.toLowerCase() ||
                stay.amenities.includes(type.toLowerCase())
            ))
        }
        return stays

    } catch (error) {
        console.log('catch error', error);
    }
}

async function getById(stayId) {
    const stay = httpService.get(`${KEY}/${stayId}`)
    return stay
}
async function remove(stayId) {
    const stay = httpService.delete(`${KEY}/${stayId}`)
    return stay
}

async function save(stay) {
    if (stay._id) {
        const res = await httpService.put(`${KEY}/${stay._id}`, stay)
        return res
    } else {
        const res = await httpService.post(KEY, stay)
        return res
    }
}