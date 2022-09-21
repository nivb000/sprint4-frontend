import { loadStays, setFilterState } from "../store/stay.action"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { StayList } from '../cmps/stay-list'
import { Loader } from '../cmps/loader'
import { FilterList } from "../cmps/filter-list"
import { useLocation } from "react-router-dom"
import { Footer } from "../cmps/footer"
const queryString = require('query-string');



export const HomePage = () => {

    const stays = useSelector(state => state.stayModule.stays)
    const filterState = useSelector(state => state.stayModule.filter)
    const dispatch = useDispatch()
    const location = useLocation()
    
    useEffect(() => {
        console.log('rendered');
        setFilter()
        dispatch(loadStays())
    }, [])
    
    const setFilter = () => {
        const filter = queryString.parse(location.search)
        if(Object.keys(filter).length !== 0){
            dispatch(setFilterState(filter))
        } else {
            dispatch(setFilterState(filter))
        }
    }


    if (!stays || stays.length < 1) return <Loader />

    return <section className="home-page">
        <FilterList />
        <StayList stays={stays} />
        <Footer />
    </section>
}