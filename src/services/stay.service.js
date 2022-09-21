import { asyncStorageService } from './async-storage.service.js'
import { utilService } from './util.service'

export const stayService = {
    getById,
    query,
    remove,
    save
}

const KEY = 'stay'

function getById(stayId) {
    return asyncStorageService.get(KEY, stayId)
}

function remove(stayId) {
    return asyncStorageService.remove(KEY, stayId)
}

function save(stay) {
    if (stay._id) return asyncStorageService.put(KEY, stay)
    else return asyncStorageService.post(KEY, stay)
}

function query(filterBy) {

    return asyncStorageService.query(KEY)
        .then(stays => {
            if (!stays || !stays.length) {
                stays = _createStays()
                return asyncStorageService.postMany(KEY, stays)
            }
            if (Object.keys(filterBy).length !== 0) {
                let { type } = filterBy
                stays = stays.filter(stay => (
                    stay.type === type.toLowerCase() ||
                    stay.amenities.includes(type.toLowerCase())
                ))
            }
            return stays
        })
}

function _createStay(imgUrls, price = utilService.getRandomIntInclusive(50, 3000)) {
    return {
        name: 'Ribeira Charming Duplex',
        type: randTypes(),
        host: {
            _id: 'u101',
            fullname: 'Moria Katz',
            imgUrl: 'https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small',
        },
        street: 'Well of Harod',
        price : 177,
        imgUrls,
        summary: 'Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...',
        capacity: 8,
        rating: {
            reviewsCount: utilService.getRandomIntInclusive(10, 100),
            rate: utilService.getRandomIntInclusive(0, 5)
        },
        amenities: [
            "Wifi",
            "Air conditioning",
            "Kitchen",
            "Heating",
            "Family/kid friendly",
            "Smoke detector",
            "Carbon monoxide detector",
            "Fire extinguisher",
            "Essentials",
            "Shampoo",
            "24-hour check-in",
            "Hangers",
            "Hair dryer",
            "Iron",
            "Laptop friendly workspace",
            "translation missing: en.hosting_amenity_49",
            "Self check-in",
            "Lockbox"
        ],
        bathrooms: 1,
        bedrooms: 1,
    }
}

function _createStays() {
    console.log('creating demo stays...')
    const stays = []
    for (let i = 0; i < 20; i++) {
        const imgUrls = createImgs()
        stays.push(_createStay(imgUrls))
    }
    return stays
}

function randTypes() {
    const types = [
        'pools', 
        'cabins', 
        'views',
        'cabins',
        'pools',
        'beaches',
        'views',
        'camping',
        'caravans',
        'chef',
        'country',
        'desert',
        'design',
        'city',
        'island',
        'mansion',
        'park',
        'shared',
        'ski',
        'surfing',
        'tiny',
        'tropical',
        'shared',
        'park',
        'surfing',
        'country',
        'desert',
    ]
    const randIdx = utilService.getRandomIntInclusive(0, types.length - 1)
    return types[randIdx]
}

function createImgs() {
    const randImgs = [
        'https://media.cntraveler.com/photos/61a60b14e663d9fce4b711c1/2:3/w_534,h_801,c_limit/Airbnb%2039271504.jpg',
        'https://a0.muscache.com/im/pictures/f7c0d0fc-ec16-432e-9051-f2e7a1d7be99.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/5f663277-bda9-4569-adda-c1c0d1f4bc0d.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-610511843622686196/original/19a492ca-0e15-4b4b-9711-6000b657c094.jpeg?im_w=720',
        'https://travelfreak.com/wp-content/uploads/2019/10/homeaway-vs-airbnb-vs-vrbo.jpg'
    ]
    const imgUrls = []
    for (let i = 0; i < 5; i++) {
        imgUrls.push(randImgs[utilService.getRandomIntInclusive(0, 4)])
    }
    return imgUrls
}
