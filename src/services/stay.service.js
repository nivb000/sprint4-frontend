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
            const regex = new RegExp(type || location,'i')
            stays = stays.filter(stay => 
                (regex.test(stay.type) ||
                regex.test(stay.amenities) ||
                regex.test(stay.loc.country) ||
                regex.test(stay.loc.countryCode) ||
                regex.test(stay.loc.city) ||
                regex.test(stay.loc.address)) &&
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