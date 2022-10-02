const INITIAL_STATE = {
    stays: null,
    filter: {type: '', location: '', adults: 1, children: 0}
}


export function stayReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_STAYS':
            return { ...state, stays: action.stays }

        case 'ADD_STAY':
            return { ...state, stays: [...state.stays, action.stay] }

        case 'REMOVE_STAY':
            return { ...state, stays: state.stays.filter(stay => stay._id !== action.stayId) }

        case 'UPDATE_STAY':
            return {
                ...state,
                stays: state.stays.map(stay => stay._id === action.stay._id ? action.stay : stay)
            }

        // case 'SET_FILTER':
        //     return { ...state, filter: { ...action.filter } }

        // TWO OPTIONS FILTER   
        case 'SET_FILTER':
            return { ...state, filter: { ...state.filter, ...action.filter } }

        default:
            return state
    }
}