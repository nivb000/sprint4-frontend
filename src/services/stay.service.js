import { httpService } from './http.service.js'

export const stayService = {
    query,
    getById,
    remove,
    save
}

const KEY = 'stay'

async function query(filterBy) {
    try {
        let stays = await httpService.get(KEY)
        if (Object.keys(filterBy).length !== 0) {
            let { type, location, adults,children } = filterBy
            stays = stays.filter(stay => 
                (stay.type.toLowerCase().includes(type.toLowerCase()) ||
                stay.amenities.includes(type.toLowerCase())) &&
                (stay.loc.country.toLowerCase().includes(location.toLowerCase()) ||
                stay.loc.countryCode.toLowerCase().includes(location.toLowerCase()) ||
                stay.loc.city.toLowerCase().includes(location.toLowerCase()) ||
                stay.loc.address.toLowerCase().includes(location.toLowerCase())) &&
                stay.capacity >= (+adults + (+children))
            )
        }
        return stays

    } catch (error) {
        throw error
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