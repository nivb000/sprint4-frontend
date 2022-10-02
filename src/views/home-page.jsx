import { useSelector } from "react-redux"
import { StayList } from '../cmps/stay-list'
import { FilterList } from "../cmps/filter-list"
import { useLocation } from "react-router-dom"
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export const HomePage = () => {

    const stays = useSelector(state => state.stayModule.stays)
    const location = useLocation()

    return <section className="home-page">
        <FilterList />
        {!stays ?  
        <Stack spacing={1}>
            <div className="stay-list">
                {Array.from(Array(12), (_, i) => 
                <div className="stay-preview" key={i}>
                    <Skeleton variant="rounded" width={'auto'} height={278} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                </div>
                )}
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