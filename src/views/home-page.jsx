import { loadStays, setFilterState } from "../store/stay.action"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { StayList } from '../cmps/stay-list'
import { Loader } from '../cmps/loader'
import { FilterList } from "../cmps/filter-list"
import { useLocation } from "react-router-dom"
const queryString = require('query-string');

export const HomePage = () => {

    const stays = useSelector(state => state.stayModule.stays)
    const dispatch = useDispatch()
    const location = useLocation()

    
    useEffect(() => {
        setFilter()
        dispatch(loadStays())
    }, [location.search])

    const setFilter = () => {
        const filter = queryString.parse(location.search)
        dispatch(setFilterState(filter))
    }


    if (!stays) return <Loader />

    return <section className="home-page">
        <FilterList />
        <StayList stays={stays} />
    </section>
}