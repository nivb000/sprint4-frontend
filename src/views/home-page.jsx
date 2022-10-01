import { loadStays, setFilterState } from "../store/stay.action"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { StayList } from '../cmps/stay-list'
import { FilterList } from "../cmps/filter-list"
import { useLocation } from "react-router-dom"
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

import { HostDashboard } from "./host-dashboard"
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

    return <section className="home-page">
        <FilterList />
        {!stays ?  
        <Stack spacing={1}>
            <div className="stay-list">
                {Array(12).fill(<Skeleton variant="rounded" width={278} height={278} />)}
            </div>
        </Stack>
        :
        <>
        {location.search.length !== 0 && <h3>Showing {stays.length} homes</h3>}
        <StayList stays={stays} />
        </>
        }
    </section>
}