import { loadStays } from "../store/stay.action"
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
    const filter = useSelector(state => state.stayModule.filter)
    const dispatch = useDispatch()
    const location = useLocation()

    useEffect(() => {
        dispatch(loadStays())
    }, [location.search])

    const setFilter = () => {
        const filter = queryString.parse(location.search)
    }
    setFilter()

    if (!stays || stays.length < 1) return <Loader />

    return <section className="home-page">
        <FilterList />
        <StayList stays={stays} />
        {/* <Footer/> */}
    </section>
}